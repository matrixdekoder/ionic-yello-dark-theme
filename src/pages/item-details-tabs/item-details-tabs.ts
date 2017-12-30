import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IService } from '../../services/IService';

@IonicPage()
@Component({
  templateUrl: 'item-details-tabs.html'
})
export class ItemDetailsPageTabs {

  page: any;
  service: IService;
  params: any = {};

  constructor(public navCtrl: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.page = navParams.get('page');
    this.service = navParams.get('service');

    if (this.service) {
      this.params = this.service.prepareParams(this.page, navCtrl);

      if (this.params.tabsLayout1) {
        this.params.data = [
          { page: "TabPage1", title: "tab 1" },
          { page: "TabPage2", title: "tab 2" },
          { page: "TabPage3", title: "tab 3" }
        ];
      }

      if (this.params.tabsLayout2) {
        this.params.data = [
          { page: "TabPage4", icon: "heart" },
          { page: "TabPage5", icon: "star" },
          { page: "TabPage6", icon: "settings" }
        ];
      }

      if (this.params.tabsLayout3) {
        this.params.data = [
          { page: "TabPage1", title: "tab 1" },
          { page: "TabPage2", title: "tab 2" },
          { page: "TabPage3", title: "tab 3" },
          { page: "TabPage4", title: "tab 4" }
        ];
      }
    } else {
      navCtrl.setRoot("HomePage");
    }
  }
}
