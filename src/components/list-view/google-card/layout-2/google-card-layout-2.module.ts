import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleCardLayout2 } from './google-card-layout-2';

@NgModule({
    declarations: [
        GoogleCardLayout2,
    ],
    imports: [
        IonicPageModule.forChild(GoogleCardLayout2),
    ],
    exports: [
        GoogleCardLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GoogleCardLayout2Module { }
