import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableLayout3 } from './expandable-layout-3';

@NgModule({
    declarations: [
        ExpandableLayout3,
    ],
    imports: [
        IonicPageModule.forChild(ExpandableLayout3),
    ],
    exports: [
        ExpandableLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ExpandableLayout3Module { }
