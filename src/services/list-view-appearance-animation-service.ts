import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class ListViewAppearanceAnimationService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'appearanceAnimations';

    getTitle = (): string => 'Appearance animations';

    getAllThemes = (): Array<any> => {
        return [
          {"title" : "Fade in left", "theme"  : "layout1"},
          {"title" : "Fade in right", "theme"  : "layout2"},
          {"title" : "Fade in down", "theme"  : "layout3"},
          {"title" : "Fade in", "theme"  : "layout4"},
          {"title" : "Zoom in", "theme"  : "layout5"}
        ];
    };

    getDataForTheme = (menuItem: any): any => {
        return {
            "items":[
               {
                  "id":1,
                  "title":"Isaac Raid",
                  "image":"assets/images/avatar/0.jpg",
                  "favorite":true
               },
               {
                  "id":2,
                  "title":"Jason Graham",
                  "image":"assets/images/avatar/1.jpg",
                  "favorite":false
               },
               {
                  "id":3,
                  "title":"Abigail Ross",
                  "image":"assets/images/avatar/2.jpg",
                  "favorite":true
               },
               {
                  "id":4,
                  "title":"Justin Rutherford",
                  "image":"assets/images/avatar/3.jpg",
                  "favorite":false
               },
               {
                  "id":5,
                  "title":"Nicholas Henderson",
                  "image":"assets/images/avatar/4.jpg",
                  "favorite":false
               },
               {
                  "id":6,
                  "title":"Elizabeth Mackenzie",
                  "image":"assets/images/avatar/5.jpg",
                  "favorite":true
               },
               {
                  "id":7,
                  "title":"Melanie Ferguson",
                  "image":"assets/images/avatar/6.jpg",
                  "favorite":false
               },
               {
                  "id":8,
                  "title":"Fiona Kelly",
                  "image":"assets/images/avatar/7.jpg",
                  "favorite":true
               },
               {
                  "id":9,
                  "title":"Nicholas King",
                  "image":"assets/images/avatar/8.jpg",
                  "favorite":true
               },
               {
                  "id":10,
                  "title":"Victoria Mitchell",
                  "image":"assets/images/avatar/9.jpg",
                  "favorite":true
               },
               {
                  "id":11,
                  "title":"Sophie Lyman",
                  "image":"assets/images/avatar/10.jpg",
                  "favorite":false
               },
               {
                  "id":12,
                  "title":"Carl Ince",
                  "image":"assets/images/avatar/11.jpg",
                  "favorite":false
               },
               {
                  "id":13,
                  "title":"Michelle Slater",
                  "image":"assets/images/avatar/12.jpg",
                  "favorite":false
               },
               {
                  "id":14,
                  "title":"Ryan Mathis",
                  "image":"assets/images/avatar/13.jpg",
                  "favorite":false
               },
               {
                  "id":15,
                  "title":"Julia Grant",
                  "image":"assets/images/avatar/14.jpg",
                  "favorite":false
               },
               {
                  "id":16,
                  "title":"Hannah Martin",
                  "image":"assets/images/avatar/15.jpg",
                  "favorite":false
               }
            ]
         };
    };

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onItemClick': function(item: any) {
                that.toastCtrl.presentToast(item.title);
            },
            'onFavorite': function(item) {
                item.favorite = !item.favorite;
            },
            'onFab': function(item: any) {
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
                    .object('listView/appearanceAnimations/' + item.theme)
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
