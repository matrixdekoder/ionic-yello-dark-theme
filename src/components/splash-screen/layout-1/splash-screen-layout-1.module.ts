import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashScreenLayout1 } from './splash-screen-layout-1';

@NgModule({
    declarations: [
        SplashScreenLayout1,
    ],
    imports: [
        IonicPageModule.forChild(SplashScreenLayout1),
    ],
    exports: [
        SplashScreenLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SplashScreenLayout1Module { }
