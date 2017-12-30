import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SplashScreenLayout2 } from './splash-screen-layout-2';

@NgModule({
    declarations: [
        SplashScreenLayout2,
    ],
    imports: [
        IonicPageModule.forChild(SplashScreenLayout2),
    ],
    exports: [
        SplashScreenLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SplashScreenLayout2Module { }
