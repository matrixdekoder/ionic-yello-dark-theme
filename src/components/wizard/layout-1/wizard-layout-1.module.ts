import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardLayout1 } from './wizard-layout-1';

@NgModule({
    declarations: [
        WizardLayout1,
    ],
    imports: [
        IonicPageModule.forChild(WizardLayout1),
    ],
    exports: [
        WizardLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WizardLayout1Module { }
