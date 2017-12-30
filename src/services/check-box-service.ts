import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'
import { ToastService } from './toast-service'
import { LoadingService } from './loading-service'

@Injectable()
export class CheckBoxService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'checkBoxes';

    getTitle = (): string => 'Check Boxes';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Simple", "theme"  : "layout1"},
          {"title" : "With Avatar", "theme"  : "layout2"},
          {"title" : "Simple 2", "theme"  : "layout3"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return this[
            'getDataFor' +
            menuItem.theme.charAt(0).toUpperCase() +
            menuItem.theme.slice(1)
        ]();
    };

    getDataForLayout1 = (): any => {
        return [
            {
               "id":1,
               "title":"Song",
               "icon":"",
               "favorite":false,
               "image":""
            },
            {
               "id":2,
               "title":"Album",
               "icon":"",
               "favorite":false,
               "image":""
            },
            {
               "id":3,
               "title":"Artist",
               "icon":"",
               "favorite":false,
               "image":""
            },
            {
               "id":4,
               "title":"Song",
               "icon":"",
               "favorite":true,
               "image":""
            },
            {
               "id":5,
               "title":"Album",
               "icon":"",
               "favorite":false,
               "image":""
            },
            {
               "id":6,
               "title":"Artist",
               "icon":"",
               "favorite":false,
               "image":""
            }
         ];
    };

    getDataForLayout2 = (): any => {
        return [
            {
               "id":1,
               "title":"Name Surname",
               "icon":"",
               "favorite":false,
               "image":"assets/images/avatar/1.jpg"
            },
            {
               "id":2,
               "title":"Name Surname",
               "icon":"",
               "favorite":false,
               "image":"assets/images/avatar/2.jpg"
            },
            {
               "id":3,
               "title":"Name Surname",
               "icon":"",
               "favorite":false,
               "image":"assets/images/avatar/3.jpg"
            },
            {
               "id":4,
               "title":"Name Surname",
               "icon":"",
               "favorite":false,
               "image":"assets/images/avatar/4.jpg"
            },
            {
               "id":5,
               "title":"Name Surname",
               "icon":"",
               "favorite":false,
               "image":"assets/images/avatar/5.jpg"
            },
            {
               "id":6,
               "title":"Name Surname",
               "icon":"",
               "favorite":false,
               "image":"assets/images/avatar/6.jpg"
            }
         ];
    };

    getDataForLayout3 = (): any => {
        return [
            {
               "id":1,
               "title":"Song",
               "icon":"icon-music-box"
            },
            {
               "id":2,
               "title":"Album",
               "icon":"icon-music-box"
            },
            {
               "id":3,
               "title":"Artist",
               "icon":"icon-music-box"
            },
            {
               "id":4,
               "title":"Song",
               "icon":"icon-music-box"
            },
            {
               "id":5,
               "title":"Album",
               "icon":"icon-music-box"
            },
            {
               "id":6,
               "title":"Artist",
               "icon":"icon-music-box"
            }
         ];
    };

    getEventsForTheme = (menuItem: any): any => {
      var that = this;
        return {
            onButton: function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            }
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            theme: item.theme,
            data: [],
            events: this.getEventsForTheme(item)
        };
        result[this.getShowItemId(item)] = true;
        return result;
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('checkBoxes/' + item.theme)
                    .valueChanges()
                    .subscribe(snapshot => {
                        that.loadingService.hide();
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        that.loadingService.hide();
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                that.loadingService.hide();
                observer.next(this.getDataForTheme(item));
                observer.complete();
            });
        }
    }
}
