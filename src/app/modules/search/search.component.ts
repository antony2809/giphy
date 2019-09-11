import { Component, HostListener, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SearchGiphy } from '../../state/gifs.action';
import { GifState } from '../../state/gifs.state';
import { Observable, Subscription } from 'rxjs';
import { Gif } from '../../interfaces/gif.interface';
import { ApplicationService } from 'src/app/services/application.service';

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

    query: string;

    @HostListener('window:scroll')
    onScroll() {
        const top = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
        const offsetHeight = document.body.offsetHeight;
        const scrollHeight = document.body.scrollHeight;
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
        private appService: ApplicationService
    ) {
        this.onRouteChange();
    }

    goToHome() {
        this.router.navigateByUrl('/');
    }

    navToGif(gif: Gif) {
        this.router.navigate(['gif', `${gif.title.replace(/ /g, '-')}-${gif.id}`], {
            state: { gif }
        });
    }

    ngOnDestroy() {
        this.routeEvents$.unsubscribe();
    }

    private onRouteChange() {
        this.routeEvents$ = this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                const { query } = this.route.snapshot.params;
                this.query = query;
                this.store.dispatch(new SearchGiphy(query));
                this.appService.searchInput = query;
            }
        });
    }
}
