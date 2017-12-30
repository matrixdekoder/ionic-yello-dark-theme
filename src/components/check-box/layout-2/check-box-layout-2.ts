import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'check-box-layout-2',
    templateUrl: 'check-box.html'
})
export class CheckBoxLayout2 {
    @Input('data') data: any;
    @Input('events') events: any;

    constructor() { }

    onEvent = (event: string, item: any): void => {
        if (this.events[event]) {
            this.events[event](item);
        }
    }
}
