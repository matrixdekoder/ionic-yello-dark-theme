import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'appearance-animation-layout-1',
    templateUrl: 'appearance-animation.html'
})
export class AppearanceAnimationLayout1 {
    @Input() data: any;
    @Input() events: any;
    @ViewChild(Content)
    content: Content;
    @ViewChild(FabButton)
    fabButton: FabButton;

    animateItems = [];
    animateClass: any;

    constructor() {
        this.animateClass = { 'fade-in-left-item': true };
    }

    onEvent(event: string, item: any, e: any) {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
        let that = this;
        that.data = changes['data'].currentValue;
        if (that.data && that.data.items) {
            for (let i = 0; i < that.data.items.length; i++) {
                setTimeout(function () {
                    that.animateItems.push(that.data.items[i]);
                }, 200 * i);
            }
        }
    }

    ngAfterViewInit() {
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }
}
