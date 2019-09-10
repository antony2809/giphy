import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchComponent
      }
    ])
  ]
})
export class SearchModule { }
