import { Component, OnInit, Input } from '@angular/core';
import { Gif } from 'src/app/interfaces/gif.interface';

@Component({
    selector: 'app-gif-list',
    templateUrl: './gif-list.component.html',
    styleUrls: ['./gif-list.component.css']
})
export class GifListComponent implements OnInit {

    @Input() gifs: Gif[];

    ngOnInit() { }
}
