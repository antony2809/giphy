import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[giphyBackground]',
})
export class GiphyBackgroundDirective implements OnInit {
    private colors = ['#e84393', '#0984e3', '#55efc4', '#a29bfe', '#ff7675'];

    constructor(private element: ElementRef<HTMLDivElement>) { }

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = this.getColor();
    }

    private getColor() {
        const idx = Math.floor(1 + Math.random() * (5 - 1));
        return this.colors[idx];
    }
}
