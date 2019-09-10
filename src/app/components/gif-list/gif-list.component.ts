import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Gif } from 'src/app/interfaces/gif.interface';

@Component({
    selector: 'app-gif-list',
    templateUrl: './gif-list.component.html',
    styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {

    @Input() gifs: Gif[];
    @Output() selected = new EventEmitter<Gif>();

    trackById(index: number, item: Gif) {
        return item.id;
    }

    selectGif(gif: Gif) {
        this.selected.emit(gif);
    }

    ngOnInit() { }
}
