import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrendingComponent } from './trending.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TrendingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: TrendingComponent
      }
    ])
  ]
})
export class TrendingModule { }
