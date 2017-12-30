import { Component } from '@angular/core';
import { ToastService } from '../../services/toast-service';
import { TabsService } from '../../services/tabs-service';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tab-page-5.html',
  providers: [TabsService]
})
export class TabPage5 {

    params:any = {};

    constructor(private tabsService: TabsService, private toastCtrl: ToastService) {
      this.tabsService.load("tab5").subscribe(snapshot => {
        this.params = snapshot;
      });
    }

    ngOnChanges(changes: { [propKey: string]: any }) {
      this.params = changes['data'].currentValue;
    }

    onItemClick(item:any) {
      this.toastCtrl.presentToast("Folow");
    }
}
