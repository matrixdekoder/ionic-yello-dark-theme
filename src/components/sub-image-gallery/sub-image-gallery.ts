import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'sub-image-gallery',
    templateUrl: 'sub-image-gallery.html'
})
export class SubImageGallery {

    @Input() data: any;
    @Input() events: any;

    constructor(public navCtrl: NavController, navParams: NavParams) { }

    onEvent = (event: string, item, e): void => {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    openImageSlider = (group: any, index: number): any => {
        this.navCtrl.push(group.fullscreen, {
            'group': group.items,
            'index': index
        });
    }
}
