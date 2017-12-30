import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayout3 } from './google-card-layout-3';

@NgModule({
    declarations: [
        GoogleCardLayout3,
    ],
    imports: [
        IonicPageModule.forChild(GoogleCardLayout3),
    ],
    exports: [
        GoogleCardLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GoogleCardLayout3Module { }
