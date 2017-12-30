import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';

@IonicPage()
@Component({
    templateUrl: 'item-details-full-screen-gallery.html'
})
export class ItemDetailsPageFullScreenGallery {
    page: any;
    service: IService;
    params: any = {};

    constructor(public navCtrl: NavController, navParams: NavParams) {
        let index =  navParams.get('index');
        this.params = {data: {}};
        if (navParams.get('group')) {
            this.params.data.items = navParams.get('group');
            this.params.data.fullscreen = "FullScreenGallery";
            this.params.data.index = index;
        } else {
            navCtrl.setRoot("HomePage");
        }
    }
}
