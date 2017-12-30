import {IService} from './IService';

export class TextViewService implements IService {

    constructor() {}

    getId = ():string => 'textViews';

    getTitle = ():string => 'Typo + small components';

    getAllThemes = (): Array<any> => {
      return [
        {"title" : "All", "theme"  : "all"},
      ];
    };

    getDataForTheme = (menuItem: any): Array<any> => {
      return this[
                'getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)
      ]();
    };

    getDataForAll = (): Array<any> => {
       return [];
    };

    getEventsForTheme = (menuItem: any): any => {
      return {};
    };

    prepareParams = (item: any) => {
      return {
          title: item.title,
          data: this.getDataForTheme(item),
          events: this.getEventsForTheme(item)
      };
    };

    load(url: string) {
      return null;
    };
}
