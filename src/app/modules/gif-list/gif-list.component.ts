import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetTrending } from '../../state/gifs.action';
import { GifState } from 'src/app/state/gifs.state';
import { Observable } from 'rxjs';
import { Gif } from 'src/app/interfaces/gif.interface';

@Component({
    selector: 'app-gif-list',
    templateUrl: './gif-list.component.html',
    styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {

    @Select(GifState.items)
    items$: Observable<Gif[]>;

    constructor(private store: Store) {
        this.store.dispatch(new GetTrending());
    }

    ngOnInit() { }
}
