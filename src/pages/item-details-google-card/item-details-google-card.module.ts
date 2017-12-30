import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageGoogleCard } from './item-details-google-card';

import { GoogleCardLayout1Module } from '../../components/list-view/google-card/layout-1/google-card-layout-1.module';
import { GoogleCardLayout2Module } from '../../components/list-view/google-card/layout-2/google-card-layout-2.module';
import { GoogleCardLayout3Module } from '../../components/list-view/google-card/layout-3/google-card-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageGoogleCard,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageGoogleCard),
    GoogleCardLayout1Module, GoogleCardLayout2Module, 
    GoogleCardLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageGoogleCardModule {}
