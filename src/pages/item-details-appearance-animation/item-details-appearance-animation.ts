import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';

@IonicPage()
@Component({
  templateUrl: 'item-details-appearance-animation.html',
})
export class ItemDetailsPageAppearanceAnimation {
  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service = navParams.get('service');
    if (this.service) {
      this.params = this.service.prepareParams(this.page, navCtrl);
      this.params.data = this.service.load(this.page);
    } else {
      navCtrl.setRoot("HomePage");
    }
  }
}
