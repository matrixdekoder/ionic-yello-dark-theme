import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class ListViewDragAndDropService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

  getId = (): string => 'dragAndDrop';

  getTitle = (): string => 'Drag and Drop';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "Small item + header", "theme": "layout1" },
      { "title": "Products + CTA header", "theme": "layout2" },
      { "title": "Medium item with avatar", "theme": "layout3" }
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
      "title":"Playlist Name",
      "description":"Author: Username",
      "duration":"35:72",
      "icon":"icon-check",
      "items":[
         {
            "id":1,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/0.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":2,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/1.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":3,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/2.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":4,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/3.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":5,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/4.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":6,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/5.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":7,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/6.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":8,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/0.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":9,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/1.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":10,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/2.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":11,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/3.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":12,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/4.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":13,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/5.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":14,
            "title":"SongName",
            "author":"Author: UserName",
            "image":"assets/images/avatar/6.jpg",
            "leftIcon":"icon-play-circle",
            "rightIcon":"icon-unfold-more"
         }
      ]
   };
  };

  getDataForLayout2 = (): any => {
    return {
      "title":"Order No. 1",
      "description":"Will be shipped: 15.5.2016.",
      "buttonText":"PROCEED",
      "headerImage":"assets/images/background/22.jpg",
      "price":"$42.99",
      "items":[
         {
            "id":1,
            "title":"Black Shirt",
            "seller":"Seller Name",
            "image":"assets/images/avatar/17.jpg",
            "oldPrice":"$42.99",
            "newPrice":"$35.99",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":2,
            "title":"Black Sweater",
            "seller":"Seller Name",
            "image":"assets/images/avatar/18.jpg",
            "oldPrice":"$42.99",
            "newPrice":"$35.99",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":3,
            "title":"Shirt",
            "seller":"Seller Name",
            "image":"assets/images/avatar/19.jpg",
            "oldPrice":"$42.99",
            "newPrice":"$35.99",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":4,
            "title":"White Shirt",
            "seller":"Seller Name",
            "image":"assets/images/avatar/20.jpg",
            "oldPrice":"$42.99",
            "newPrice":"$35.99",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":5,
            "title":"White T shirt",
            "seller":"Seller Name",
            "image":"assets/images/avatar/21.jpg",
            "oldPrice":"$42.99",
            "newPrice":"$35.99",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":6,
            "title":"T shirt",
            "seller":"Seller Name",
            "image":"assets/images/avatar/22.jpg",
            "oldPrice":"$42.99",
            "newPrice":"$35.99",
            "rightIcon":"icon-unfold-more"
         },
         {
            "id":7,
            "title":"Hoodies",
            "seller":"Seller Name",
            "image":"assets/images/avatar/23.jpg",
            "oldPrice":"$42.99",
            "newPrice":"$35.99",
            "rightIcon":"icon-unfold-more"
         }
      ]
   };
  };

  getDataForLayout3 = (): any => {
    return {
      "items":[
         {
            "id":1,
            "title":"Isaac Reid",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/0.jpg"
         },
         {
            "id":2,
            "title":"Jason Graham",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/1.jpg"
         },
         {
            "id":3,
            "title":"Abigail Ross",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/2.jpg"
         },
         {
            "id":4,
            "title":"Justin Rutherford",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/3.jpg"
         },
         {
            "id":5,
            "title":"Nicholas Henderson",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/4.jpg"
         },
         {
            "id":6,
            "title":"Elizabeth Mackenzie",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/5.jpg"
         },
         {
            "id":7,
            "title":"Melanie Ferguson",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/6.jpg"
         },
         {
            "id":8,
            "title":"Fiona Kelly",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/7.jpg"
         },
         {
            "id":9,
            "title":"Nicholas King",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/8.jpg"
         },
         {
            "id":10,
            "title":"Victoria Mitchell",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/9.jpg"
         },
         {
            "id":11,
            "title":"Sophie Lyman",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/10.jpg"
         },
         {
            "id":12,
            "title":"Carl Ince",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/11.jpg"
         },
         {
            "id":13,
            "title":"Michelle Slater",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/12.jpg"
         },
         {
            "id":14,
            "title":"Ryan Mathis",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/13.jpg"
         },
         {
            "id":15,
            "title":"Julia Grant",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/14.jpg"
         },
         {
            "id":16,
            "title":"Hannah Martin",
            "description":"from Las Vegas",
            "image":"assets/images/avatar/15.jpg"
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
      'onProceed': function (item: any) {
          that.toastCtrl.presentToast("Proceed");
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
        this.af
          .object('listView/dragAndDrop/' + item.theme)
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
  };
}
