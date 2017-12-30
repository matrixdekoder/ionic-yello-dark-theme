import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout3 } from './appearance-animation-layout-3';

@NgModule({
    declarations: [
        AppearanceAnimationLayout3,
    ],
    imports: [
        IonicPageModule.forChild(AppearanceAnimationLayout3),
    ],
    exports: [
        AppearanceAnimationLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppearanceAnimationLayout3Module { }
