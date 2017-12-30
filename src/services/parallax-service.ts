import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class ParallaxService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'parallax';

    getTitle = (): string => 'Parallax';

    getAllThemes = (): Array<any> => {
        return [
            { "title": "Player", "theme": "layout1" },
            { "title": "Product", "theme": "layout2" },
            { "title": "Basic", "theme": "layout3" },
            { "title": "Location Details", "theme": "layout4" }
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
            "headerImage":"assets/images/background/14.jpg",
            "toolBarTitle":"Player",
            "title":"ArtistName",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "iconSkipPrevious":"icon-skip-previous",
            "iconPlay":"icon-play",
            "iconSkipNext":"icon-skip-next",
            "items":[
               {
                  "id":1,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/0.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":2,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/1.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":3,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/2.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":4,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/3.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":5,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/4.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":6,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/5.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":7,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/6.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":8,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/7.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":9,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/1.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":10,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/2.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":11,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/0.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               },
               {
                  "id":12,
                  "title":"SongName",
                  "description":"ArtistName",
                  "image":"assets/images/avatar/3.jpg",
                  "imageAlt":"avatar",
                  "icon":"icon-heart-outline",
                  "duration":"3:42"
               }
            ]
         };
    };

    getDataForLayout2 = (): any => {
        return {
            "headerImage":"assets/images/background/7.jpg",
            "toolBarTitle":"Product",
            "title":"Super discount",
            "description":"50% OFF",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-heart",
            "iconShare":"icon-share-variant",
            "items":[
               {
                  "id":1,
                  "title":"Black Shirt",
                  "image":"assets/images/avatar/0.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":2,
                  "title":"Black Sweater",
                  "image":"assets/images/avatar/1.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":3,
                  "title":"Shirt",
                  "image":"assets/images/avatar/2.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":4,
                  "title":"White Shirt",
                  "image":"assets/images/avatar/3.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":5,
                  "title":"White T Shirt",
                  "image":"assets/images/avatar/4.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":6,
                  "title":"Hoodies",
                  "image":"assets/images/avatar/5.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":7,
                  "title":"Black Shirt",
                  "image":"assets/images/avatar/0.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":8,
                  "title":"Black Sweater",
                  "image":"assets/images/avatar/1.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":9,
                  "title":"Shirt",
                  "image":"assets/images/avatar/2.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":10,
                  "title":"White Shirt",
                  "image":"assets/images/avatar/3.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":11,
                  "title":"White T Shirt",
                  "image":"assets/images/avatar/4.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               },
               {
                  "id":12,
                  "title":"Hoodies",
                  "image":"assets/images/avatar/5.jpg",
                  "description":"Duis aute irure dolor in reprehenderit",
                  "oldPrice":"$42.99",
                  "newPrice":"$35.99"
               }
            ]
         };
    };

    getDataForLayout3 = (): any => {
        return {
            "headerImage":"assets/images/background/2.jpg",
            "avatar":"assets/images/avatar/0.jpg",
            "title":"Parallax Title",
            "items":[
               {
                  "id":1,
                  "title":"Isaac Raid",
                  "image":"assets/images/avatar/0.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":2,
                  "title":"Jason Graham",
                  "image":"assets/images/avatar/1.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":3,
                  "title":"Abigail Ross",
                  "image":"assets/images/avatar/2.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":4,
                  "title":"Justin Rutherford",
                  "image":"assets/images/avatar/3.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":5,
                  "title":"Nicholas Henderson",
                  "image":"assets/images/avatar/4.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":6,
                  "title":"Elizabeth Mackenzie",
                  "image":"assets/images/avatar/5.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":7,
                  "title":"Melanie Ferguson",
                  "image":"assets/images/avatar/6.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":8,
                  "title":"Fiona Kelly",
                  "image":"assets/images/avatar/7.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":9,
                  "title":"Nicholas King",
                  "image":"assets/images/avatar/8.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":10,
                  "title":"Victoria Mitchell",
                  "image":"assets/images/avatar/9.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":11,
                  "title":"Sophie Lyman",
                  "image":"assets/images/avatar/10.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":12,
                  "title":"Carl Ince",
                  "image":"assets/images/avatar/11.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":13,
                  "title":"Michelle Slater",
                  "image":"assets/images/avatar/12.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":14,
                  "title":"Ryan Mathis",
                  "image":"assets/images/avatar/13.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":15,
                  "title":"Julia Grant",
                  "image":"assets/images/avatar/14.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               },
               {
                  "id":16,
                  "title":"Hannah Martin",
                  "image":"assets/images/avatar/15.jpg",
                  "icon":"icon-heart-outline",
                  "favorite":false
               }
            ]
         };
    };

    getDataForLayout4 = (): any => {
        return {
            "headerImage":"assets/images/background/15.jpg",
            "title":"Joe's restaurant",
            "iconLike":"icon-thumb-up",
            "iconFavorite":"icon-comment",
            "iconShare":"icon-share-variant",
            "reviews":"4.12 (78 reviews)",
            "iconButton":"icon-walk",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            "description2":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
            "description3":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English",
            "description4":"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
            "iconsStars":[
               {
                  "isActive":true,
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline"
               },
               {
                  "isActive":true,
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline"
               },
               {
                  "isActive":true,
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline"
               },
               {
                  "isActive":true,
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline"
               },
               {
                  "isActive":false,
                  "iconActive":"icon-star",
                  "iconInactive":"icon-star-outline"
               }
            ],
            "items":[
               {
                  "id":1,
                  "name":"ADDRESS:",
                  "value":"Boulevard of food, New York, USA"
               },
               {
                  "id":2,
                  "name":"PHONE:",
                  "value":"+555 555 555"
               },
               {
                  "id":3,
                  "name":"WEB:",
                  "value":"www.joesrestaurant.com"
               },
               {
                  "id":4,
                  "name":"MAIL:",
                  "value":"jimmy@gmail.com"
               },
               {
                  "id":5,
                  "name":"WORKING HOURS:",
                  "value":"7:00 to 23:00 every day"
               }
            ]
         };
    }

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onLike': function (item: any) {
                  that.toastCtrl.presentToast("Like");
            },
            'onFavorite': function (item: any) {
                  item.favorite = !item.favorite;
                  that.toastCtrl.presentToast("Favorite");
            },
            'onShare': function (item: any) {
                  that.toastCtrl.presentToast("Share");
            },
            'onSkipPrevious': function (item: any) {
                  that.toastCtrl.presentToast("Skip Previous");
            },
            'onPlay': function (item: any) {
                  that.toastCtrl.presentToast("Play");
            },
            'onSkipNext': function (item: any) {
                  that.toastCtrl.presentToast("Skip Next");
            },
            'onFab': function (item: any) {
                  that.toastCtrl.presentToast("Fab");
            },
            'onRates': function (index: number) {
                  that.toastCtrl.presentToast("Rates " + (index + 1));
            },
            'onItemClick': function (item: any) {
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
    };

    load(item: any): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('parallax/' + item.theme)
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
