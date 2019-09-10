import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/trending/trending.module').then(m => m.TrendingModule) },
  { path: 'search/:query', loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule) },
  { path: 'gif/:url', loadChildren: () => import('./modules/gif-item/gif-item.module').then(m => m.GifItemModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
