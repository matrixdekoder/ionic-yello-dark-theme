import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardLayout3 } from './wizard-layout-3';

@NgModule({
    declarations: [
        WizardLayout3,
    ],
    imports: [
        IonicPageModule.forChild(WizardLayout3),
    ],
    exports: [
        WizardLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WizardLayout3Module { }
