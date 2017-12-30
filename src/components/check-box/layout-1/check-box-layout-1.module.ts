import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckBoxLayout1 } from './check-box-layout-1';

@NgModule({
    declarations: [
        CheckBoxLayout1,
    ],
    imports: [
        IonicPageModule.forChild(CheckBoxLayout1),
    ],
    exports: [
        CheckBoxLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class CheckBoxLayout1Module { }
