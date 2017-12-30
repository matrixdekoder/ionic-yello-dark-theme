import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@IonicPage()
@Component({
    selector: 'full-screen-gallery',
    templateUrl: 'full-screen-gallery.html'
})
export class FullScreenGallery {
    @Input() data: any;
    @Input() events: any;
    @ViewChild('slider') slider: Slides;
    public isLocked: boolean = false;
    sliderOptions: any;
    pagar:any;
    constructor(public navCtrl: NavController, navParams: NavParams) {
      this.sliderOptions = {
        pager: true
      };
    }

    onEvent = (event: string, item, e): void => {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    onDoubleClick = (e, slides: Slides):void => {
      this.isLocked = !this.isLocked;
      slides.lockSwipes(this.isLocked);
    }
    ionViewDidLoad() {
      this.sliderOptions = {
        pager:true,
        loop: true,
        zoom:true,
        initialSlide:this.data.index
      };
      debugger;
    }
}
