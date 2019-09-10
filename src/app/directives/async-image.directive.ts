import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[asyncImage]',
})
export class AsyncImageDirective implements OnInit {

    @Input('asyncImage') image: string;

    defaultGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    constructor(private element: ElementRef<HTMLImageElement>) { }

    ngOnInit() {
        const observer = new IntersectionObserver(([entry]) => {
            this.element.nativeElement.src = entry.isIntersecting ? this.image : this.defaultGif;
        });
        observer.observe(this.element.nativeElement);
    }
}
