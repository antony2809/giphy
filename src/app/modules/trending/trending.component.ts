import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetTrending } from 'src/app/state/gifs.action';
import { GifState } from 'src/app/state/gifs.state';
import { Observable } from 'rxjs';
import { Gif } from 'src/app/interfaces/gif.interface';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
    selector: 'app-trending',
    templateUrl: './trending.component.html',
    styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

    @Select(GifState.items)
    items$: Observable<Gif[]>;

    constructor(
        private store: Store,
        private router: Router,
        private appService: ApplicationService
    ) {
        this.store.dispatch(new GetTrending());
        this.appService.searchInput = '';
    }

    navToGif(gif: Gif) {
        this.router.navigate(['gif', `${gif.title.replace(/ /g, '-')}-${gif.id}`], {
            state: { gif }
        });
    }

    ngOnInit() { }
}
