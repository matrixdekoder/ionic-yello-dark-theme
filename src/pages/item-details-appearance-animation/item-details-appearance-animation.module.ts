import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageAppearanceAnimation } from './item-details-appearance-animation';

import { AppearanceAnimationLayout1Module } from '../../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module';
import { AppearanceAnimationLayout2Module } from '../../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module';
import { AppearanceAnimationLayout3Module } from '../../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module';
import { AppearanceAnimationLayout4Module } from '../../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module';
import { AppearanceAnimationLayout5Module } from '../../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module';

@NgModule({
  declarations: [
    ItemDetailsPageAppearanceAnimation,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageAppearanceAnimation),
    AppearanceAnimationLayout1Module, AppearanceAnimationLayout2Module, AppearanceAnimationLayout3Module, 
    AppearanceAnimationLayout4Module, AppearanceAnimationLayout5Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageAppearanceAnimationModule {}
