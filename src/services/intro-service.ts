import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings';
import { LoadingService } from './loading-service';

@Injectable()
export class IntroService {

    constructor(public af: AngularFireDatabase, private loadingService: LoadingService) {}

    getData = (): any => {
        return {
            "btnPrev":"Previous",
            "btnNext":"Next",
            "btnFinish":"Finish",
            "items":[
               {
                  "logo":"assets/images/logo/2.png",
                  "title":"Welcome to our new iOS style theme",
                  "description":"Finished layouts and components for Ionic 3. Ready to use!"
               },
               {
                  "logo":"assets/images/logo/2.png",
                  "title":"For Developers",
                  "description":"Save hours of developing. Tons of funcional components."
               },
               {
                  "logo":"assets/images/logo/2.png",
                  "title":"For Designers",
                  "description":"Endless possibilities. Combine layouts as you wish."
               }
            ]
         };
    }

    load(): Observable<any> {
        var that = this;
        that.loadingService.show();
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('intro')
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
                observer.next(this.getData());
                observer.complete();
            });
        }
    };
}
