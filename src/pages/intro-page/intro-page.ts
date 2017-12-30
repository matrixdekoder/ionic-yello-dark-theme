import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { IntroService } from '../../services/intro-service';

@IonicPage()
@Component({
  templateUrl: 'intro-page.html',
  providers: [IntroService]
})
export class IntroPage {
  params: any = null;

  constructor(public viewCtrl: ViewController, public introService: IntroService) {
    var that = this;

    this.introService.load().subscribe(snapshot => {
      setTimeout(function () {
        that.params = {
          'events': {
            'onFinish': function (event: any) {
              that.viewCtrl.dismiss();
            }
          },
          'data': snapshot
        };
      })
    });
  }
}
