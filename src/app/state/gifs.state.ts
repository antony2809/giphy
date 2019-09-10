import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SearchGiphy, GetGiphy, GetTrending } from './gifs.action';
import { GiphyService } from '../services/giphy.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';

export interface GifStateModel {
    loading: boolean;
    items: Gif[];
    query: string;
    currentOffset: number;
    endOfPage: boolean;
}


@State<GifStateModel>({
    name: 'gifs',
    defaults: {
        loading: false,
        items: null,
        query: null,
        currentOffset: 0,
        endOfPage: false
    }
})
export class GifState {


    @Selector()
    static items({ items }: GifStateModel) {
        return items;
    }

    @Selector()
    static loading({ loading }: GifStateModel) {
        return loading;
    }

    @Selector()
    static endOfList({ endOfPage }: GifStateModel) {
        return endOfPage;
    }

    constructor(
        private giphyService: GiphyService,
        private router: Router,
        private zone: NgZone
    ) {

    }

    @Action(GetTrending)
    getTrending(ctx: StateContext<GifStateModel>) {
        return this.giphyService.getTrending()
            .pipe(
                catchError(this.handleError)
            )
            .subscribe(res => {
                ctx.patchState({
                    items: res.data
                });
            });
    }
    @Action(SearchGiphy)
    search(ctx: StateContext<GifStateModel>, action: SearchGiphy) {
        let state = ctx.getState();
        const query = action.payload || state.query;
        const currentOffset = action.payload ? 0 : state.currentOffset;

        ctx.patchState({
            loading: true,
            items: action.payload ? null : state.items,
            query
        });

        return this.giphyService.search(query, currentOffset)
            .pipe(
                catchError(this.handleError)
            )
            .subscribe(res => {
                const { count, total_count, offset } = res.pagination;
                state = ctx.getState();
                ctx.patchState({
                    items: [...state.items || [], ...res.data],
                    loading: false,
                    currentOffset: currentOffset + environment.requestLimit,
                    endOfPage: offset + count >= total_count
                });
            });
    }

    @Action(GetGiphy)
    getGiphy(ctx: StateContext<GifStateModel>, action: SearchGiphy) {
        ctx.patchState({
            loading: true,
            items: null,
            query: null
        });
        return this.giphyService.getGiphy(action.payload)
            .pipe(
                map(({ data }) => data)
            )
            .subscribe(gif => {
                this.zone.run(() => {
                    this.router.navigate(['gif', `${gif.title.replace(/ /g, '-')}-${gif.id}`], {
                        state: { gif }
                    });
                });
            });
    }

    private handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

}
