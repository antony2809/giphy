import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyBackgroundDirective } from '../directives/giphy-background.directive';
import { AsyncImageDirective } from '../directives/async-image.directive';
import { GifListComponent } from '../components/gif-list/gif-list.component';
import { NgxsModule } from '@ngxs/store';
import { GifState } from '../state/gifs.state';
import { LoadingComponent } from '../components/loader/loader.component';

@NgModule({
    declarations: [
        GiphyBackgroundDirective,
        AsyncImageDirective,
        GifListComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule,
        NgxsModule.forFeature([
            GifState
        ])
    ],
    exports: [
        GiphyBackgroundDirective,
        AsyncImageDirective,
        GifListComponent,
        LoadingComponent
    ],
})
export class SharedModule { }
