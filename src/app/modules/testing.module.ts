import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { GifState } from '../state/gifs.state';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes } from '@angular/router';
import { ApplicationService } from '../services/application.service';
import { GiphyService } from '../services/giphy.service';
import { ApiKeyInterceptor } from '../interceptors/api-key.interceptor';

const routes: Routes = [
    { path: '', loadChildren: () => import('./trending/trending.module').then(m => m.TrendingModule) },
    { path: 'search/:query', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
    { path: 'gif/:url', loadChildren: () => import('./gif-item/gif-item.module').then(m => m.GifItemModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgxsModule.forRoot([GifState]),
        RouterTestingModule.withRoutes(routes)
    ],
    exports: [
        SharedModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        ApplicationService,
        GiphyService
    ],
})
export class TestingModule { }
