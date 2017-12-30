import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout4 } from './appearance-animation-layout-4';

@NgModule({
    declarations: [
        AppearanceAnimationLayout4,
    ],
    imports: [
        IonicPageModule.forChild(AppearanceAnimationLayout4),
    ],
    exports: [
        AppearanceAnimationLayout4
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppearanceAnimationLayout4Module { }
