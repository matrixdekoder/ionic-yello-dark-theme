import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'tabs-layout-1',
    templateUrl: 'tabs.html'
})
export class TabsLayout1 {
    @Input('data') data: any;
    @Input('events') events: any;
    @ViewChild('tabs') tabRef: any;

    constructor() { }
}
