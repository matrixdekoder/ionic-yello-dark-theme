import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable()
export class MenuService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

    getId = ():string => 'menu';

    getTitle = ():string => 'UIAppTemplate';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "List Views", "theme"  : "listViews",  "icon" : "icon-format-align-justify", "listView" : true, "component": ""},
        {"title" : "Parallax", "theme"  : "parallax",  "icon" : "icon-format-line-spacing", "listView" : false, "component":""},
        {"title" : "Login Pages", "theme"  : "login",  "icon" : "icon-lock-open-outline", "listView" : false, "component":""},
        {"title" : "Register Pages", "theme"  : "register",  "icon" : "icon-comment-account", "listView" : false, "component":""},
        {"title" : "Image Gallery", "theme"  : "imageGallery",  "icon" : "icon-apps", "listView" : false, "component":""},
        {"title" : "Splash Screen", "theme"  : "splashScreens",  "icon" : "icon-logout", "listView" : false, "component":""},
        {"title" : "Check Boxs", "theme"  : "checkBoxes",  "icon" : "icon-checkbox-marked", "listView" : false, "component":""},
        {"title" : "Search Bars", "theme"  : "searchBars",  "icon" : "icon-magnify", "listView" : false, "component":""},
        {"title" : "Typo + small components", "theme"  : "textViews",  "icon" : "icon-tumblr", "listView" : false, "component":""},
        {"title" : "Wizard", "theme"  : "wizard",  "icon" : "icon-cellphone-settings", "listView" : false, "component":""},
        {"title" : "Spinner", "theme"  : "spinner",  "icon" : "icon-image-filter-tilt-shift", "listView" : false, "component":""},
        {"title" : "Tabs", "theme"  : "tabs",  "icon" : "icon-view-array", "listView" : false, "component":""},
        {"title" : "Maps", "theme"  : "maps",  "icon" : "icon-google-maps", "listView" : false, "component":""},
        {"title" : "Scanner", "theme"  : "qrcode",  "icon" : "icon-qrcode", "listView" : false, "component":""}
      ];
    };

    getDataForTheme = (menuItem: any) => {
      return {
        "background": "assets/images/background/16.jpg",
        "image": "assets/images/logo/login.png",
        "title": "Ionic3 UI Theme - Yellow Dark"
      };
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
        title: item.title,
        data: {},
        events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {
      var that = this;
      that.loadingService.show();
      if (AppSettings.IS_FIREBASE_ENABLED) {
        return new Observable(observer => {
          this.af
            .object('menu')
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
