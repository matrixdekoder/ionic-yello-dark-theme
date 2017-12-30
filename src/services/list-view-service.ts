import { IService } from './IService';

export class ListViewService implements IService {

  constructor() { }

  getId = (): string => 'listViews';

  getTitle = (): string => 'List views';

  getAllThemes = (): Array<any> => {
    return [
      { "title": "Expandable", "theme": "expandable", "listView": true },
      { "title": "Drag&Drop", "theme": "dragAndDrop", "listView": true },
      { "title": "Swipe-to-dismiss", "theme": "swipeToDismiss", "listView": true },
      { "title": "Appearance animations", "theme": "appearanceAnimation", "listView": true },
      { "title": "Google Cards", "theme": "googleCards", "listView": true },
    ];
  };

  getDataForTheme = (menuItem: any): Array<any> => {
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
