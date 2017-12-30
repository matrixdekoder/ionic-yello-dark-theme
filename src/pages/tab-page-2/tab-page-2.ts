import { Component } from '@angular/core';
import { ToastService } from '../../services/toast-service';
import { TabsService } from '../../services/tabs-service';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tab-page-2.html',
  providers: [TabsService]
})
export class TabPage2 {
    params:any = {};

    constructor(private tabsService: TabsService, private toastCtrl: ToastService) {
      this.tabsService.load("tab2").subscribe(snapshot => {
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
