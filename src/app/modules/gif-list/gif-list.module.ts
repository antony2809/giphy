import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifListComponent } from './gif-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GifListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GifListComponent
      }
    ])
  ],
})
export class GifListModule { }
