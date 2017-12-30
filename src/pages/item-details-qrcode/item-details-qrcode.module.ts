import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageQRCode } from './item-details-qrcode';

import { QRcodeLayout1Module } from '../../components/qrcode/layout-1/qrcode-layout-1.module';

@NgModule({
  declarations: [
    ItemDetailsPageQRCode,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageQRCode),
    QRcodeLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageQRCodeModule {}
