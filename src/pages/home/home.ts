import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomeService } from '../../services/home-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeService]
})
export class HomePage {

  data:any = {};

  constructor(public navCtrl: NavController, public service:HomeService) {
    service.load().subscribe(snapshot => {
      this.data = snapshot;
    });
  }

}
