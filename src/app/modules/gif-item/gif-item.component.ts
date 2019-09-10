import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetGiphy } from 'src/app/state/gifs.action';
import { Store } from '@ngxs/store';
import { Gif } from 'src/app/interfaces/gif.interface';
import { Location } from '@angular/common';


@Component({
    selector: 'app-gif-item',
    templateUrl: './gif-item.component.html',
    styleUrls: ['./gif-item.component.css']
})
export class GifItemComponent implements OnDestroy {

    gif: Gif;
    routeEvents$: Subscription;
    title: string;

    constructor(
        private router: Router,
        private store: Store,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.onRouteChange();
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.routeEvents$.unsubscribe();
    }

    private onRouteChange() {
        this.routeEvents$ = this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                const state = this.router.getCurrentNavigation().extras.state;
                if (state && state.gif) {
                    const gif = state.gif as Gif;
                    this.gif = gif;
                    this.title = gif.title || `${gif.user && gif.user.username || 'No title'} GIF`;
                } else {
                    const { url } = this.route.snapshot.params;
                    const urlParts = url.split('-');
                    const gifId = urlParts[urlParts.length - 1];
                    this.store.dispatch(new GetGiphy(gifId));
                }
            }
        });
    }
}
