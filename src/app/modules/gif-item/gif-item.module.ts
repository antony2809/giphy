import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifItemComponent } from './gif-item.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [GifItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: GifItemComponent
      }
    ])
  ]
})
export class GifItemModule { }
