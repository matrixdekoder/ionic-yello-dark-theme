import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class MapsService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'maps';

    getTitle = (): string => 'Maps';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "GMAPS + Location  Details", "theme"  : "layout1"},
          {"title" : "GMAPS + About Us", "theme"  : "layout2"},
          {"title" : "Full Screen View", "theme"  : "layout3"}
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
        return {
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "title":"Museum of modern art",
            "titleDescription":"Art Boulevard, New York, USA",
            "reviews":"4.12 (78 reviews)",
            "contentTitle":"In short",
            "contentDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
            "iconLoacation":"icon-map-marker-radius",
            "iconLoacationText":"Design Street, New York, USA",
            "iconWatch":"icon-alarm",
            "iconWatchText":"8:00 to 16:00 working days",
            "iconPhone":"icon-phone",
            "iconPhoneText":"333 222 111",
            "iconEarth":"icon-earth",
            "iconEarthText":"www.csform.com",
            "iconEmail":"icon-email-outline",
            "iconEmailText":"dev@csform.com",
            "iconsStars":[
               {
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline",
                  "isActive":true
               },
               {
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline",
                  "isActive":true
               },
               {
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline",
                  "isActive":true
               },
               {
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline",
                  "isActive":true
               },
               {
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline",
                  "isActive":false
               }
            ],
            "map":{
               "lat":40.712562,
               "lng":-74.005911,
               "zoom":15,
               "mapTypeControl":true,
               "streetViewControl":true
            }
         };
    };

    getDataForLayout2 = (): any => {
        return {
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "title":"Creative Studio Form",
            "titleDescription":"Design & Development agency",
            "contentTitle":"About us",
            "contentDescription":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
            "iconLoacation":"icon-map-marker-radius",
            "iconLoacationText":"Design Street, New York, USA",
            "iconWatch":"icon-alarm",
            "iconWatchText":"8:00 to 16:00 working days",
            "iconPhone":"icon-phone",
            "iconPhoneText":"333 222 111",
            "iconEarth":"icon-earth",
            "iconEarthText":"www.csform.com",
            "iconEmail":"icon-email-outline",
            "iconEmailText":"dev@csform.com",
            "titleMap":"Here we are :",
            "map":{
               "lat":40.712562,
               "lng":-74.005911,
               "zoom":15,
               "mapTypeControl":true,
               "streetViewControl":true
            }
         };
    };

    getDataForLayout3 = (): any => {
        return {
            "map":{
               "lat":40.712562,
               "lng":-74.005911,
               "zoom":15,
               "mapTypeControl":true,
               "streetViewControl":true
            }
         };
    };


     getEventsForTheme = (menuItem: any): any => {
       var that = this;
        return {
            'onLike': function(item: any) {
                  that.toastCtrl.presentToast("Like");
            },
            'onFavorite': function(item: any) {
                    item.favorite = !item.favorite;
                    that.toastCtrl.presentToast("Favorite");
            },
            'onShare': function(item: any) {
                  that.toastCtrl.presentToast("Share");
            },
            'onSkipPrevious': function(item: any) {
                  that.toastCtrl.presentToast("Skip Previous");
            },
            'onPlay': function(item: any) {
                  that.toastCtrl.presentToast("Play");
            },
            'onSkipNext': function(item: any) {
                  that.toastCtrl.presentToast("Skip Next");
            },
            'onFab': function(item: any) {
                  that.toastCtrl.presentToast("Fab");
            },
            'onRates' : function(index: number) {
                  that.toastCtrl.presentToast("Rates " + (index+1));
            },
            'onItemClick': function(item: any) {
                  that.toastCtrl.presentToast(item.title);
            },
        };
    };

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: {},
            theme: item.theme,
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
                    .object('maps/' + item.theme)
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
