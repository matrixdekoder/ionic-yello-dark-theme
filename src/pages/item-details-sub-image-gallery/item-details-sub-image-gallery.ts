import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';

@IonicPage()
@Component({
    templateUrl: 'item-details-sub-image-gallery.html'
})
export class ItemDetailsPageSubImageGallery {
    page: any;
    service: IService;
    params: any = {};

    constructor(public navCtrl: NavController, navParams: NavParams) {
        this.params = {};
        this.params.events = navParams.get('events');
        this.params.data = navParams.get('group');
        if (navParams.get('group')) {
            this.params.data.fullscreen = "ItemDetailsPageFullScreenGallery";
        } else {
            navCtrl.setRoot("HomePage");
        }
    }
}
