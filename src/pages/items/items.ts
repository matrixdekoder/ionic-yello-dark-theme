import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { ValidationService } from '../../services/validation';
import { MailChimpService } from '../../services/mail-chimp-service';

import { IService } from '../../services/IService';

import { AppSettings } from '../../services/app-settings';
import { CheckBoxService } from '../../services/check-box-service';
import { MapsService } from '../../services/maps-service';
import { QRCodeService } from '../../services/qrcode-service';
import { TextViewService } from '../../services/text-view-service';
import { SpinnerService } from '../../services/spinner-service';
import { SplashScreenService } from '../../services/splash-screen-service';
import { SearchBarService } from '../../services/search-bar-service';
import { WizardService } from '../../services/wizard-service';
import { TabsService } from '../../services/tabs-service';
import { ListViewService } from '../../services/list-view-service';
import { ListViewExpandableService } from '../../services/list-view-expandable-service';
import { ListViewDragAndDropService } from '../../services/list-view-drag-and-drop-service';
import { ListViewSwipeToDismissService } from '../../services/list-view-swipe-to-dismiss-service';
import { ListViewAppearanceAnimationService } from '../../services/list-view-appearance-animation-service';
import { ListViewGoogleCardsService } from '../../services/list-view-google-card-service';
import { ParallaxService } from '../../services/parallax-service';
import { ImageGalleryService } from '../../services/image-gallery-service';
import { LoginService } from '../../services/login-service';
import { RegisterService } from '../../services/register-service';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@IonicPage()
@Component({
    templateUrl: 'items.html',
    providers: [MailChimpService, TextViewService, SpinnerService, SplashScreenService, LoginService, RegisterService,
        SearchBarService, CheckBoxService, WizardService, TabsService, ParallaxService,
        ListViewService, ListViewExpandableService, ListViewDragAndDropService, ImageGalleryService,
        ListViewSwipeToDismissService, ListViewGoogleCardsService, ListViewAppearanceAnimationService, MapsService, QRCodeService,
        HttpService, ValidationService]
})
export class ItemsPage {
    title: string;
    componentName: string;
    pages: any = {};
    listServices: { [key: string]: IService; } = {};
    service: IService;

    // services: array
    constructor(public navCtrl: NavController,
        private textViewService: TextViewService,
        private spinnerService: SpinnerService,
        private imageGalleryService: ImageGalleryService,
        private searchBarService: SearchBarService,
        private checkBoxService: CheckBoxService,
        private parallaxService: ParallaxService,
        private wizardService: WizardService,
        private tabsService: TabsService,
        private listViewService: ListViewService,
        private listViewExpandableService: ListViewExpandableService,
        private listViewDragAndDropService: ListViewDragAndDropService,
        private listViewSwipeToDismissService: ListViewSwipeToDismissService,
        private listViewAppearanceAnimationService: ListViewAppearanceAnimationService,
        private listViewGoogleCardsService: ListViewGoogleCardsService,
        private loginService: LoginService,
        private registerService: RegisterService,
        private mapsService: MapsService,
        private qRCodeService: QRCodeService,
        private splashScreenService: SplashScreenService,
        public alertCtrl: AlertController,
        navParams: NavParams,
        private ga: GoogleAnalytics,
        private httpService: HttpService,
        private validationService: ValidationService,
        private mailChimpService: MailChimpService) {

        this.setGoogleAnalytics();

        this.listServices = {
          'checkBoxes': checkBoxService,
          'login': loginService,
          'register': registerService,
          'imageGallery': imageGalleryService,
          'textViews': textViewService,
          'spinner': spinnerService,
          'parallax': parallaxService,
          'wizard': wizardService,
          'searchBars': searchBarService,
          'tabs': tabsService,
          'listViews': listViewService,
          'expandable': listViewExpandableService,
          'dragAndDrop': listViewDragAndDropService,
          'swipeToDismiss': listViewSwipeToDismissService,
          'appearanceAnimation': listViewAppearanceAnimationService,
          'googleCards': listViewGoogleCardsService,
          'splashScreens': splashScreenService,
          'maps': mapsService,
          'qrcode': qRCodeService,
        };

        this.componentName = navParams.get('componentName');
        this.service = this.listServices[this.componentName];
        if (this.service) {
          this.pages = this.service.getAllThemes();
          this.title = this.service.getTitle();
          this.eventTrackView(this.title);
        } else {
          navCtrl.setRoot("HomePage");
          return;
        }
    }

    selectPageForOpen(value: string): any {
        let page;

        switch (value) {
          case "spinner":
            page = "ItemDetailsPageSpinner";
            break;
          case "textViews":
            page = "ItemDetailsPageTextView";
            break;
          case "splashScreens":
            page = "ItemDetailsPageSplashScreen";
            break;
          case "searchBars":
            page = "ItemDetailsPageSearchBar";
            break;
          case "checkBoxes":
            page = "ItemDetailsPageCheckBox";
            break;
          case "wizard":
            page = "ItemDetailsPageWizard";
            break;
          case "tabs":
            page = "ItemDetailsPageTabs";
            break;
          case "login":
            page = "ItemDetailsPageLogin";
            break;
          case "register":
            page = "ItemDetailsPageRegister";
            break;
          case "expandable":
            page = "ItemDetailsPageExpandable";
            break;
          case "swipeToDismiss":
            page = "ItemDetailsPageSwipeToDismiss";
            break;
          case "dragAndDrop":
            page = "ItemDetailsPageDragAndDrop";
            break;
          case "appearanceAnimation":
            page = "ItemDetailsPageAppearanceAnimation";
            break;
          case "googleCards":
            page = "ItemDetailsPageGoogleCard";
            break;
          case "parallax":
            page = "ItemDetailsPageParallax";
            break;
          case "maps":
            page = "ItemDetailsPageMaps";
            break;
          case "imageGallery":
            page = "ItemDetailsPageImageGallery";
            break;
          case "qrcode":
            page = "ItemDetailsPageQRCode";
            break;
          default:
            page = "ItemDetailsPage";
        }
        return page;
      }

  openPage(page: any) {
      if (AppSettings.SUBSCRIBE) {
        if (this.mailChimpService.showMailChimpForm()) {
          this.mailChimpService.setMailChimpForm(false);
          this.showPrompt();
        } else {
          this.navigation(page);
        }
      } else {
        this.navigation(page);
      }
  }

  navigation(page: any) {
    if (page.listView) {
      this.navCtrl.push(ItemsPage, {
        componentName: page.theme
      });
    } else {
      this.navCtrl.push(this.selectPageForOpen(this.componentName), {
        service: this.service,
        page: page
      });

    }
  }

    showPrompt() {
        let prompt = this.alertCtrl.create({
            title: 'STAY TUNED FOR NEW <br> THEMES AND FREEBIES',
            message: "SUBSCRIBE TO <br> OUR NEWSLETTER",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your e-mail'
                },
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Send',
                    handler: data => {
                        if (data) {
                            if (this.validationService.isMail(data.email)) {
                                this.httpService.sendData(data.email).subscribe(
                                    data => {
                                        this.mailChimpService.hideMailChimp();
                                    }, err => {
                                        alert(err);
                                    }, null);
                            } else {
                                return false;
                            }
                        } else {
                            return false
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    setGoogleAnalytics() {
        if (window.location.hostname != "localhost") {
            this.ga.startTrackerWithId("UA-35500609-14").then(() => {
                this.ga.trackEvent("active", "user", "click");
            })
        } else {
            console.log("Start Tracker");
        }
    }

    eventTrackView(event) {
        if (window.location.hostname != "localhost") {
            this.ga.trackView(event, "Items", false);
            this.ga.trackEvent("openPage", event, "click");
        } else {
            console.log("event:" + event);
        }
    }
}
