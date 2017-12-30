import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class ListViewExpandableService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'expandable';

  getTitle = (): string => 'Expandable';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "List big image", "theme": "layout1" },
      { "title": "Full image with CTA", "theme": "layout2" },
      { "title": "Centered with header", "theme": "layout3" }
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.theme.charAt(0).toUpperCase() +
      menuItem.theme.slice(1)
    ]();
  };

  getDataForLayout1 = (): any => {
    return {
      "items":[
         {
            "id":1,
            "title":"Artist1",
            "description":"SINGER",
            "image":"assets/images/avatar/15.jpg",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"AlbumName",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/10.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":2,
                  "title":"AlbumName",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/11.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":3,
                  "title":"AlbumName",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/12.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":4,
                  "title":"AlbumName",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/13.jpg",
                  "iconPlay":"icon-play-circle-outline"
               }
            ]
         },
         {
            "id":2,
            "title":"Artist2",
            "description":"BASSO",
            "image":"assets/images/avatar/2.jpg",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"AlbumName1",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/14.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":2,
                  "title":"AlbumName2",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/15.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":3,
                  "title":"AlbumName3",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/14.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":4,
                  "title":"AlbumName4",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/13.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":5,
                  "title":"AlbumName5",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/12.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":6,
                  "title":"AlbumName6",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/11.jpg",
                  "iconPlay":"icon-play-circle-outline"
               }
            ]
         },
         {
            "id":3,
            "title":"Artist3",
            "description":"GUITARIST",
            "image":"assets/images/avatar/3.jpg",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"AlbumName1",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/11.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":2,
                  "title":"AlbumName2",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/12.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":3,
                  "title":"AlbumName3",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/13.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":4,
                  "title":"AlbumName4",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/14.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":5,
                  "title":"AlbumName5",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/15.jpg",
                  "iconPlay":"icon-play-circle-outline"
               }
            ]
         },
         {
            "id":4,
            "title":"Artist4",
            "description":"SINGER",
            "image":"assets/images/avatar/4.jpg",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"AlbumName1",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/0.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":2,
                  "title":"AlbumName2",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/1.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":3,
                  "title":"AlbumName3",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/2.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":4,
                  "title":"AlbumName4",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/3.jpg",
                  "iconPlay":"icon-play-circle-outline"
               }
            ]
         },
         {
            "id":5,
            "title":"Artist5",
            "description":"DRUMMER",
            "image":"assets/images/avatar/5.jpg",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"AlbumName1",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/14.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":2,
                  "title":"AlbumName2",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/15.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":3,
                  "title":"AlbumName3",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/6.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":4,
                  "title":"AlbumName4",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/7.jpg",
                  "iconPlay":"icon-play-circle-outline"
               }
            ]
         },
         {
            "id":6,
            "title":"Artist5",
            "description":"DRUMMER",
            "image":"assets/images/avatar/3.jpg",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"AlbumName1",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/14.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":2,
                  "title":"AlbumName2",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/15.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":3,
                  "title":"AlbumName3",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/6.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":4,
                  "title":"AlbumName4",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/7.jpg",
                  "iconPlay":"icon-play-circle-outline"
               }
            ]
         },
         {
            "id":7,
            "title":"Artist5",
            "description":"DRUMMER",
            "image":"assets/images/avatar/4.jpg",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"AlbumName1",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/14.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":2,
                  "title":"AlbumName2",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/15.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":3,
                  "title":"AlbumName3",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/6.jpg",
                  "iconPlay":"icon-play-circle-outline"
               },
               {
                  "id":4,
                  "title":"AlbumName4",
                  "description":"Universal, 2016",
                  "image":"assets/images/avatar/7.jpg",
                  "iconPlay":"icon-play-circle-outline"
               }
            ]
         }
      ]
   };
  };

  getDataForLayout2 = (): any => {
    return {
      "items":[
         {
            "id":1,
            "title":"Product 1",
            "backgroundImage":"assets/images/background/22.jpg",
            "button":"BUY",
            "items":[
               "PAY WITH PAYPAL",
               "PAY WITH VISA CARD",
               "PAY WITH MAESTRO CARD"
            ]
         },
         {
            "id":2,
            "title":"Product 2",
            "backgroundImage":"assets/images/background/23.jpg",
            "button":"BUY",
            "items":[
               "PAY WITH PAYPAL",
               "PAY WITH VISA CARD",
               "PAY WITH MAESTRO CARD"
            ]
         },
         {
            "id":3,
            "title":"Product 3",
            "backgroundImage":"assets/images/background/24.jpg",
            "button":"BUY",
            "items":[
               "PAY WITH PAYPAL",
               "PAY WITH VISA CARD",
               "PAY WITH MAESTRO CARD"
            ]
         },
         {
            "id":4,
            "title":"Product 4",
            "backgroundImage":"assets/images/background/25.jpg",
            "button":"BUY",
            "items":[
               "PAY WITH PAYPAL",
               "PAY WITH VISA CARD",
               "PAY WITH MAESTRO CARD"
            ]
         },
         {
            "id":5,
            "title":"Product 5",
            "backgroundImage":"assets/images/background/26.jpg",
            "button":"BUY",
            "items":[
               "PAY WITH PAYPAL",
               "PAY WITH VISA CARD",
               "PAY WITH MAESTRO CARD"
            ]
         },
         {
            "id":6,
            "title":"Product 5",
            "backgroundImage":"assets/images/background/27.jpg",
            "button":"BUY",
            "items":[
               "PAY WITH PAYPAL",
               "PAY WITH VISA CARD",
               "PAY WITH MAESTRO CARD"
            ]
         },
         {
            "id":7,
            "title":"Product 5",
            "backgroundImage":"assets/images/background/28.jpg",
            "button":"BUY",
            "items":[
               "PAY WITH PAYPAL",
               "PAY WITH VISA CARD",
               "PAY WITH MAESTRO CARD"
            ]
         }
      ]
   }
  };

  getDataForLayout3 = (): any => {
    return {
      "title":"New York",
      "headerImage":"assets/images/background-small/7.jpg",
      "items":[
         {
            "title":"Where to go",
            "icon":"icon-map-marker-radius",
            "items":[
               "Monuments",
               "Sightseeing",
               "Historical",
               "Sport"
            ]
         },
         {
            "title":"Where to sleep",
            "icon":"icon-hotel",
            "items":[
               "Hotels",
               "Hostels",
               "Motels",
               "Rooms"
            ]
         },
         {
            "title":"Where to eat",
            "icon":"icon-silverware-variant",
            "items":[
               "Fast Food",
               "Restorants",
               "Pubs",
               "Hotels"
            ]
         },
         {
            "title":"Where to drink",
            "icon":"icon-martini",
            "items":[
               "Caffes",
               "Bars",
               "Pubs",
               "Clubs"
            ]
         },
         {
            "title":"Where to go",
            "icon":"icon-map-marker-radius",
            "items":[
               "Monuments",
               "Sightseeing",
               "Historical",
               "Sport"
            ]
         }
      ]
   };
  };

  getEventsForTheme = (menuItem: any): any => {
    var that = this;
    return {
      'onItemClick': function (item: any) {
          that.toastCtrl.presentToast(item.title);
      },
      'onLike': function (item: any) {
          that.toastCtrl.presentToast("Like");
      },
      'onFavorite': function (item: any) {
          that.toastCtrl.presentToast("Favorite");
      },
      'onShare': function (item: any) {
          that.toastCtrl.presentToast("Share");
      },
      'onFab': function (item: any) {
          that.toastCtrl.presentToast("Fab");
      },
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
        console.log(item.theme)
        this.af
          .object('listView/expandable/' + item.theme)
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
