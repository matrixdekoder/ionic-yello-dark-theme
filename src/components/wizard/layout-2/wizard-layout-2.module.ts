import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardLayout2 } from './wizard-layout-2';

@NgModule({
    declarations: [
        WizardLayout2,
    ],
    imports: [
        IonicPageModule.forChild(WizardLayout2),
    ],
    exports: [
        WizardLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class WizardLayout2Module { }
