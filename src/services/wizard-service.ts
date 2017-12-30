import { IService } from './IService';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { ToastService } from './toast-service';
import { LoadingService } from './loading-service';

@Injectable()
export class WizardService implements IService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService, private toastCtrl: ToastService) { }

    getId = (): string => 'wizard';

    getTitle = (): string => 'Wizard';

    getAllThemes = (): Array<any> => {
        return [
            {"title" : "Simple + icon", "theme"  : "layout1"},
            {"title" : "Big image", "theme"  : "layout2"},
            {"title" : "Big Image + Text", "theme"  : "layout3"}
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
            "toolBarTitle":"Simple + icon",
            "btnPrev":"Previous",
            "btnNext":"Next",
            "btnFinish":"Finish",
            "items":[
               {
                  "logo":"",
                  "iconSlider":"icon-star-outline",
                  "title":"Fragment Example 1",
                  "description":"Text for Fragment Example 1 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "buttonNext":"Next"
               },
               {
                  "logo":"",
                  "iconSlider":"icon-star-half",
                  "title":"Fragment Example 2",
                  "description":"Text for Fragment Example 2 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "buttonNext":"Next",
                  "buttonPrevious":"Previous"
               },
               {
                  "logo":"",
                  "iconSlider":"icon-star",
                  "title":"Fragment Example 3",
                  "description":"Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "buttonPrevious":"Previous",
                  "buttonFinish":"Finish"
               }
            ]
         };
    };

    getDataForLayout2 = (): any => {
        return {
            "toolBarTitle":"Big image",
            "btnNext":"Next",
            "btnFinish":"Finish",
            "items":[
               {
                  "backgroundImage":"assets/images/avatar-large/1.jpg",
                  "title":"Fragment Example 1"
               },
               {
                  "backgroundImage":"assets/images/avatar-large/2.jpg",
                  "title":"Fragment Example 2"
               },
               {
                  "backgroundImage":"assets/images/avatar-large/3.jpg",
                  "title":"Fragment Example 3"
               }
            ]
         };
    };

    getDataForLayout3 = (): any => {
        return {
            "btnNext":"Next",
            "btnFinish":"Finish",
            "btnSkip":"Skip",
            "items":[
               {
                  "backgroundImage":"assets/images/avatar-large/5.jpg",
                  "title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 1",
                  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                  "button":"Next",
                  "skip":"Skip"
               },
               {
                  "backgroundImage":"assets/images/avatar-large/6.jpg",
                  "title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 2",
                  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                  "button":"Next",
                  "skip":"Skip"
               },
               {
                  "backgroundImage":"assets/images/avatar-large/7.jpg",
                  "title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 3",
                  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
                  "button":"Finish",
                  "skip":"Skip"
               }
            ]
         };
    }

    getEventsForTheme = (menuItem: any): any => {
        var that = this;
        return {
            'onFinish': function(event: any) {
                  that.toastCtrl.presentToast("Finish");
            }
        };
    };

    getShowItemId = (item: any): string => {
        return this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
    }

    prepareParams = (item: any) => {
        let result = {
            title: item.title,
            data: [],
            theme: item.theme,
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
                    .object('wizard/' + item.theme)
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
