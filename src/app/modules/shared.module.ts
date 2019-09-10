import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiphyBackgroundDirective } from '../directives/async-image.directive';
import { GifListComponent } from '../components/gif-list/gif-list.component';
import { NgxsModule } from '@ngxs/store';
import { GifState } from '../state/gifs.state';
import { LoadingComponent } from '../components/loader/loader.component';

@NgModule({
    declarations: [
        GiphyBackgroundDirective,
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
        GifListComponent,
        LoadingComponent
    ],
})
export class SharedModule { }
