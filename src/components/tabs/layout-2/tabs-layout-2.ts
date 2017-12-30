import { Component, Input, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'tabs-layout-2',
    templateUrl: 'tabs.html'
})
export class TabsLayout2 {
    @Input('data') data: any;
    @Input('events') events: any;
    @ViewChild('tabs') tabRef: any;

    constructor() { }
}
