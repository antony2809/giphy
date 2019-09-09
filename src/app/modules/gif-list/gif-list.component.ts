import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetTrending } from '../../state/gifs.action';

@Component({
    selector: 'app-gif-list',
    templateUrl: './gif-list.component.html',
    styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {
    constructor(private store: Store) {
        this.store.dispatch(new GetTrending());
    }

    ngOnInit() { }
}
