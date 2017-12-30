import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'maps-layout-1',
    templateUrl: 'maps.html'
})
export class MapsLayout1 {
    @Input() data: any;
    @Input() events: any;

    constructor() { }

    onEvent(event: string, index: number, e: any) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    }

     onStarClass(items: any, index: number, e: any) {
        for (var i = 0; i < items.length; i++) {
        items[i].isActive = i <= index;
        }
        this.onEvent("onRates", index, e);
    };
}