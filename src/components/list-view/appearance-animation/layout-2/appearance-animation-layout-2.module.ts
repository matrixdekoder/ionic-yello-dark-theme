import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppearanceAnimationLayout2 } from './appearance-animation-layout-2';

@NgModule({
    declarations: [
        AppearanceAnimationLayout2,
    ],
    imports: [
        IonicPageModule.forChild(AppearanceAnimationLayout2),
    ],
    exports: [
        AppearanceAnimationLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppearanceAnimationLayout2Module { }
