import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'splash-screen-layout-1',
    templateUrl: 'splash-screen.html'
})
export class SplashScreenLayout1 {
    @Input('data') data: any;
    @Input('events') events: any;
    timer:any;
    constructor() {}

    ngOnChanges(changes: {[propKey: string]: any}) {
      clearInterval(this.timer);
      this.executeEvents();
    }

    getData(): any {
      return this.data;
    }

    getEvents(): any {
      return this.events;
    }

    executeEvents() : void {
      let duration = (this.getData() && this.getData().duration) ? this.getData().duration : 10000;
      var events = null;

      if (this.getEvents()) {
        events = this.getEvents()['onRedirect'];
      }

      this.timer = setTimeout(function(){
        if (events) {
          events();
        }
      }, duration);
    }

    ngOnDestroy() {
      clearInterval(this.timer);
    }
}
