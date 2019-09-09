import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/gif-list/gif-list.module').then(m => m.GifListModule) },
  { path: 'gif/:id', loadChildren: () => import('./modules/gif-item/gif-item.module').then(m => m.GifItemModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
