import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckBoxLayout2 } from './check-box-layout-2';

@NgModule({
    declarations: [
        CheckBoxLayout2,
    ],
    imports: [
        IonicPageModule.forChild(CheckBoxLayout2),
    ],
    exports: [
        CheckBoxLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class CheckBoxLayout2Module { }
