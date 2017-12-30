import { IService } from './IService';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingService } from './loading-service';

@Injectable()
export class SpinnerService implements IService {

    constructor(private loadingService: LoadingService) { }

    getId = ():string => 'spinners';

    getTitle = ():string => 'Spinners';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "All", "theme"  : "all"}
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return this[
                'getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)
      ]();
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    getDataForAll = (): Array<any> => {
      return [
        {"icon": "tail-spin"},
        {"icon": "oval"},
        {"icon": "audio"},
        {"icon": "bars"},
        {"icon": "hearts"},
        {"icon": "three-dots"},
        {"icon": "puff"},
        {"icon": "grid"},
        {"icon": "ball-triangle"},
        {"icon": "circles"}
      ];
    };

    prepareParams = (item: any) => {
      return {
        spinner: true,
        title: item.title,
        data: {},
        theme: item.theme,
        events: this.getEventsForTheme(item)
      };
    };

    load(item: any): Observable<any> {
      var that = this;
      that.loadingService.show();
        return new Observable(observer => {
          that.loadingService.hide();
          observer.next(this.getDataForAll());
          observer.complete();
        });
    };
}
