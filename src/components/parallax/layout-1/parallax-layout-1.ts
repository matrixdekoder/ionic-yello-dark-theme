import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'parallax-layout-1',
    templateUrl: 'parallax.html'
})
export class ParallaxLayout1 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;

    constructor() { }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        this.subscribeToIonScroll();
     }
     
    ngAfterViewInit() {
        this.subscribeToIonScroll();
    }

    subscribeToIonScroll() {
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe((d) => {
                this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
            });
        }
    }
}
