import { IService } from './IService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class QRCodeService implements IService {

    constructor(private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'qrcode';

    getTitle = (): string => 'Scanner';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Click here", "theme"  : "layout1"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return {}
    };

     getEventsForTheme = (menuItem: any): any => {
       var that = this;
        return {
            'onFab': function(item: any) {
                  that.toastCtrl.presentToast("Fab");
            },
            'onScan': function(item:any) {
                  that.toastCtrl.presentToast(JSON.stringify(item));
            },
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: this.getDataForTheme(item),
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    };

    load(item: any): Observable<any> {
          var that = this;
          that.loadingService.show();
          return new Observable(observer => {
            that.loadingService.hide();
            observer.next(this.getDataForTheme(item));
            observer.complete();
          });
    }
}
