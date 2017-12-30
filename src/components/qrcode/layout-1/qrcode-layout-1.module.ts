import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRcodeLayout1 } from './qrcode-layout-1';

@NgModule({
    declarations: [
        QRcodeLayout1,
    ],
    imports: [
        IonicPageModule.forChild(QRcodeLayout1),
    ],
    exports: [
        QRcodeLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class QRcodeLayout1Module { }
