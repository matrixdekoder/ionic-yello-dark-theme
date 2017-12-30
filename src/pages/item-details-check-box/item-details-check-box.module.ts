import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageCheckBox } from './item-details-check-box';

import { CheckBoxLayout1Module } from '../../components/check-box/layout-1/check-box-layout-1.module';
import { CheckBoxLayout2Module } from '../../components/check-box/layout-2/check-box-layout-2.module';
import { CheckBoxLayout3Module } from '../../components/check-box/layout-3/check-box-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageCheckBox,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageCheckBox),
    CheckBoxLayout1Module, CheckBoxLayout2Module, CheckBoxLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageCheckBoxModule {}
