import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SearchGiphy, LoadMore, GetGiphy, GetTrending } from './gifs.action';
import { GiphyService } from '../services/giphy.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

export interface GifStateModel {
    loading: boolean;
    items: IMasonryGalleryImage[];
}


@State<GifStateModel>({
    name: 'gifs',
    defaults: {
        loading: false,
        items: null,
    }
})
export class GifState {

    @Selector()
    static items({ items }) {
        return items;
    }

    constructor(private giphyService: GiphyService) {

    }

    @Action(GetTrending)
    getTrending(ctx: StateContext<GifStateModel>, action: GetTrending) {
        return this.giphyService.getTrending()
            .pipe(
                catchError(this.handleError)
            )
            .subscribe(res => {
                ctx.patchState({
                    items: res.data.map(item => {
                        return { imageUrl: item.images.fixed_height.url } as IMasonryGalleryImage;
                    })
                });
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
