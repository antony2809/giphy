import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { GiphyQueryResponse } from '../interfaces/giphy-response.interface';

@Injectable({
    providedIn: 'root'
})
export class GiphyService {
    constructor(private http: HttpClient) { }

    search(query: string, offset = 0) {
        return this.http
            .get<GiphyQueryResponse>(`${environment.baseUrl}/v1/gifs/search?q=${query}&limit=${environment.requestLimit}&offset=${offset}`);
    }

    getTrending() {
        return this.http
            .get<GiphyQueryResponse>(`${environment.baseUrl}/v1/gifs/trending?limit=${environment.requestLimit}`);
    }

    getGiphy(giphyId: string) {
        return this.http
            .get(`${environment.baseUrl}/v1/gifs/${giphyId}`);
    }
}
