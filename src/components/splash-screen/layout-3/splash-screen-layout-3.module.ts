import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashScreenLayout3 } from './splash-screen-layout-3';

@NgModule({
    declarations: [
        SplashScreenLayout3,
    ],
    imports: [
        IonicPageModule.forChild(SplashScreenLayout3),
    ],
    exports: [
        SplashScreenLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SplashScreenLayout3Module { }
