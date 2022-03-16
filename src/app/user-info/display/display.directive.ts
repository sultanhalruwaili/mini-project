import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[app-display]'
})

export class DisplayDirective implements OnInit {


    constructor(private elRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    }

    @HostListener('mouseout') mouseout(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white')
    }
 
}