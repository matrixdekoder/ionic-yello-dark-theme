import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'maps-layout-3',
    templateUrl: 'maps.html'
})
export class MapsLayout3 {
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