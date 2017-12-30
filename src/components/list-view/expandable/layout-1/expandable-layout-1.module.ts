import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableLayout1 } from './expandable-layout-1';

@NgModule({
    declarations: [
        ExpandableLayout1,
    ],
    imports: [
        IonicPageModule.forChild(ExpandableLayout1),
    ],
    exports: [
        ExpandableLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ExpandableLayout1Module { }
