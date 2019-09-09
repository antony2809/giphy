import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListComponent } from './gif-list.component';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { GifState } from 'src/app/state/gifs.state';
import { SharedModule } from '../shared.module';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';


@NgModule({
  declarations: [GifListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MasonryGalleryModule,
    NgxsModule.forFeature([
      GifState
    ]),
    RouterModule.forChild([
      {
        path: '',
        component: GifListComponent
      }
    ])
  ],
})
export class GifListModule { }
