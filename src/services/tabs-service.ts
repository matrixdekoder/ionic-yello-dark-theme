import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable()
export class TabsService implements IService {

  constructor(public af: AngularFireDatabase, private loadingService: LoadingService) { }

  getId = (): string => 'tabs';

  getTitle = (): string => 'Tabs';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "Footer tab - text", "theme": "layout1" },
      { "title": "Footer tab - icons", "theme": "layout2" },
      { "title": "Header tab - text", "theme": "layout3" }
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
    return this[
      'getDataFor' +
      menuItem.charAt(0).toUpperCase() +
      menuItem.slice(1)
    ]();
  };

  getDataForTab1 = () => {
    return {
      "backgroundImage": "../assets/images/avatar-large/5.jpg",
      "title": "Fragment Example 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    };
  };

  getDataForTab2 = () => {
    return {
      "backgroundImage": "../assets/images/avatar-large/6.jpg",
      "title": "Fragment Example 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    };
  };

  getDataForTab3 = () => {
    return {
      "backgroundImage": "../assets/images/avatar-large/7.jpg",
      "title": "Fragment Example 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    };
  };

  getDataForTab4 = () => {
    return {
      "backgroundImage": "../assets/images/avatar-large/5.jpg",
      "title": "Fragment Example 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    };
  };

  getDataForTab5 = () => {
    return {
      "backgroundImage": "../assets/images/avatar-large/6.jpg",
      "title": "Fragment Example 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    };
  };

  getDataForTab6 = () => {
    return {
      "backgroundImage": "../assets/images/avatar-large/7.jpg",
      "title": "Fragment Example 1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    };
  };

  getEventsForTheme = (menuItem: any): any => {
    return {};
  };


  getShowItemId = (item: any): string => {
    return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
  }

  prepareParams = (item: any) => {
    let result = {
      title: item.title,
      data: [],
      events: this.getEventsForTheme(item)
    };
    result[this.getShowItemId(item)] = true;
    return result;
  };

  load(item: any): Observable<any> {
    var that = this;
    that.loadingService.show();
    if (AppSettings.IS_FIREBASE_ENABLED) {
      return new Observable(observer => {
        this.af
          .object('tab/' + item)
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
