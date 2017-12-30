import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'login-layout-2',
    templateUrl: 'login.html'
})
export class LoginLayout2 {
  @Input() data: any;
  @Input() events: any;

  public username: string;
  public password: string;

  constructor() {}

  onEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'username' : this.username,
            'password' : this.password
        });
    }
  }
}
