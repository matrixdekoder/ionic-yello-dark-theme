import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'maps-layout-2',
    templateUrl: 'maps.html'
})
export class MapsLayout2 {
    @Input() data: any;
    @Input() events: any;
   
    constructor() { }

    onEvent(event: string) {
        if (this.events[event]) {
            this.events[event]();
        }
        console.log(event);
    }
}