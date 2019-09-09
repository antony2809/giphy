import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  test$: Observable<any>

  constructor(private http: HttpClient) {
    this.test$ = this.http
      .get('https://api.giphy.com/v1/gifs/search?api_key=fCH19ipMALgKWpXw8NWyDhIyZrHCgYPD&q=jordan&limit=25&offset=0&rating=G&lang=en')
  }

  title = 'giphy';
}
