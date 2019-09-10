import { Component, HostListener, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SearchGiphy } from '../../state/gifs.action';
import { GifState } from '../../state/gifs.state';
import { Observable, Subscription } from 'rxjs';
import { Gif } from '../../interfaces/gif.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnDestroy {

    @Select(GifState.items)
    items$: Observable<Gif[]>;

    @Select(GifState.endOfList)
    endOfList$: Observable<boolean>;

    routeEvents$: Subscription;

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        const top = (window.pageYOffset || this.document.documentElement.scrollTop) - (this.document.documentElement.clientTop || 0);
        const offsetHeight = this.document.body.offsetHeight;
        const scrollHeight = this.document.body.scrollHeight;
        if ((offsetHeight + top + 100) >= scrollHeight) {
            const loading = this.store.selectSnapshot(GifState.loading);
            const endOfList = this.store.selectSnapshot(GifState.endOfList);
            if (!loading && !endOfList) {
                this.store.dispatch(new SearchGiphy());
            }
        }
    }

    constructor(
        private store: Store,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.onRouteChange();
    }

    ngOnDestroy() {
        this.routeEvents$.unsubscribe();
    }

    private onRouteChange() {
        this.routeEvents$ = this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                const { query } = this.route.snapshot.params;
                this.store.dispatch(new SearchGiphy(query));
            }
        });
    }
}
