import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from '../interceptors/api-key.interceptor';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiKeyInterceptor,
            multi: true
        }
    ],
})
export class SharedModule { }
