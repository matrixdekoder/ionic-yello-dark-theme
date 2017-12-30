import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageParallax } from './item-details-parallax';


import { ParallaxLayout1Module } from '../../components/parallax/layout-1/parallax-layout-1.module';
import { ParallaxLayout2Module } from '../../components/parallax/layout-2/parallax-layout-2.module';
import { ParallaxLayout3Module } from '../../components/parallax/layout-3/parallax-layout-3.module';
import { ParallaxLayout4Module } from '../../components/parallax/layout-4/parallax-layout-4.module';


@NgModule({
  declarations: [
    ItemDetailsPageParallax,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageParallax),
    ParallaxLayout1Module, ParallaxLayout2Module, ParallaxLayout3Module, ParallaxLayout4Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageParallaxModule {}
