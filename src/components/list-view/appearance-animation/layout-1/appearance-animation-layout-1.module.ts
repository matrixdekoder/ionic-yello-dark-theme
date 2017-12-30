import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout1 } from './appearance-animation-layout-1';

@NgModule({
    declarations: [
        AppearanceAnimationLayout1,
    ],
    imports: [
        IonicPageModule.forChild(AppearanceAnimationLayout1),
    ],
    exports: [
        AppearanceAnimationLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppearanceAnimationLayout1Module { }
