import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage, Content, FabButton, reorderArray } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'drag-and-drop-layout-3',
    templateUrl: 'drag-and-drop.html'
})
export class DragAndDropLayout3 {
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

    reorderItems = (indexes): void => {
        this.data.items = reorderArray(this.data.items, indexes);
    }

    ngAfterViewInit() {
        this.content.ionScroll.subscribe((d) => {
            this.fabButton.setElementClass("fab-button-out", d.directionY == "down");
        });
    }
}
