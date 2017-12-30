import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageLogin } from './item-details-login';

import { LoginLayout1Module } from '../../components/login/layout-1/login-layout-1.module';
import { LoginLayout2Module } from '../../components/login/layout-2/login-layout-2.module';


@NgModule({
  declarations: [
    ItemDetailsPageLogin,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageLogin),
    LoginLayout1Module, LoginLayout2Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageLoginModule {}
