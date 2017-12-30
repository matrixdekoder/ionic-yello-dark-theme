import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckBoxLayout3 } from './check-box-layout-3';

@NgModule({
    declarations: [
        CheckBoxLayout3,
    ],
    imports: [
        IonicPageModule.forChild(CheckBoxLayout3),
    ],
    exports: [
        CheckBoxLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class CheckBoxLayout3Module { }
