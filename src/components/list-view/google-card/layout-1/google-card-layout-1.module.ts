import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayout1 } from './google-card-layout-1';

@NgModule({
    declarations: [
        GoogleCardLayout1,
    ],
    imports: [
        IonicPageModule.forChild(GoogleCardLayout1),
    ],
    exports: [
        GoogleCardLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GoogleCardLayout1Module { }
