import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroPage } from './intro-page';

import { WizardLayout1Module } from '../../components/wizard/layout-1/wizard-layout-1.module';

@NgModule({
    declarations: [
        IntroPage,
    ],
    imports: [
        IonicPageModule.forChild(IntroPage),
        WizardLayout1Module
    ],
    exports: [
        IntroPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class IntroPageModule { }
