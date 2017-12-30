import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'qrcode-layout-1',
    templateUrl: 'qrcode.html'
})
export class QRcodeLayout1 {
    @Input() data: any;
    @Input() events: any;

    constructor() { }

    onEvent(event: string, result:any) {
        if (this.events[event]) {
            this.events[event](result);
        }
    }

}