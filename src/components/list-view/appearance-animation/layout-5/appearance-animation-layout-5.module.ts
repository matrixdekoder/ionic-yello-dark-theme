import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout5 } from './appearance-animation-layout-5';

@NgModule({
    declarations: [
        AppearanceAnimationLayout5,
    ],
    imports: [
        IonicPageModule.forChild(AppearanceAnimationLayout5),
    ],
    exports: [
        AppearanceAnimationLayout5
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppearanceAnimationLayout5Module { }
