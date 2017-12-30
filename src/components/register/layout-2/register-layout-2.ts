import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'register-layout-2',
    templateUrl: 'register.html'
})
export class RegisterLayout2 {

    @Input() data: any;
    @Input() events: any;

    username: string;
    password: string;
    country: string;
    city: string;
    email: string;

    constructor() { }

    onEvent = (event: string): void => {
        if (this.events[event]) {
            this.events[event]({
                'username': this.username,
                'password': this.password,
                'country': this.country,
                'city': this.city,
                'email': this.email
            });
        }
    }
}
