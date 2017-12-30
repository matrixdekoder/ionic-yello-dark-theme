import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageRegister } from './item-details-register';

import { RegisterLayout1Module } from '../../components/register/layout-1/register-layout-1.module';
import { RegisterLayout2Module } from '../../components/register/layout-2/register-layout-2.module';

@NgModule({
  declarations: [
    ItemDetailsPageRegister,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageRegister),
    RegisterLayout1Module, RegisterLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageRegisterModule {}
