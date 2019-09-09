import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifItemComponent } from './gif-item.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [GifItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GifItemComponent
      }
    ])
  ]
})
export class GifItemModule { }
