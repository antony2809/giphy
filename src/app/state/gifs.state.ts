import { State, Action, StateContext } from '@ngxs/store';
import { SearchGiphy, LoadMore, GetGiphy, GetTrending } from './gifs.action';
import { GiphyService } from '../services/giphy.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface GifStateModel {
    loading: boolean;
}


@State<GifStateModel>({
    name: 'gifs',
    defaults: {
        loading: false,
    }
})
export class GifState {

    constructor(private giphyService: GiphyService) {

    }

    @Action(GetTrending)
    getTrending(ctx: StateContext<GifStateModel>, action: GetTrending) {
        return this.giphyService.getTrending()
            .pipe(
                map(({ data, pagination }) => data),
                catchError(this.handleError)
            )
            .subscribe(res => {
                console.log(res);
            });
    }
    @Action(SearchGiphy)
    search(ctx: StateContext<GifStateModel>, action: SearchGiphy) {

    }

    @Action(LoadMore)
    loadMore(ctx: StateContext<GifStateModel>) { }

    @Action(GetGiphy)
    getGiphy(ctx: StateContext<GifStateModel>, action: GetGiphy) { }

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
