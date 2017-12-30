import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSplashScreen } from './item-details-splash-screen';

import { SplashScreenLayout1Module } from '../../components/splash-screen/layout-1/splash-screen-layout-1.module';
import { SplashScreenLayout2Module } from '../../components/splash-screen/layout-2/splash-screen-layout-2.module';
import { SplashScreenLayout3Module } from '../../components/splash-screen/layout-3/splash-screen-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageSplashScreen,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageSplashScreen),
    SplashScreenLayout1Module, SplashScreenLayout2Module, SplashScreenLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageSplashScreenModule { }
