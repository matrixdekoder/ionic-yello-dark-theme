import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageMaps } from './item-details-maps';

import { MapsLayout1Module } from '../../components/maps/layout-1/maps-layout-1.module';
import { MapsLayout2Module } from '../../components/maps/layout-2/maps-layout-2.module';
import { MapsLayout3Module } from '../../components/maps/layout-3/maps-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageMaps,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageMaps),
    MapsLayout1Module, MapsLayout2Module, MapsLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageMapsModule {}
