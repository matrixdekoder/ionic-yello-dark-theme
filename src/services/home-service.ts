import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'

@Injectable()
export class HomeService {

    constructor(public af: AngularFireDatabase) { }

    getData = () => {
        return {
            "toolbarTitle": "Ionic3 UI Theme - Yellow Dark",
            "title": "SAVE HOURS",
            "subtitle": "OF DEVELOPING",
            "subtitle2": "and make apps fast as light!",
            "link":"http://csform.com/documentation-for-ionic-2-ui-template-app/",
            "description": "For better understanding how our template works please read documentation.",
            "background": "assets/images/background/29.jpg"
        };
    };

    load(): Observable<any> {
        var that = this;
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}
