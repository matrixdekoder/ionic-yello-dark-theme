import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableLayout2 } from './expandable-layout-2';

@NgModule({
    declarations: [
        ExpandableLayout2,
    ],
    imports: [
        IonicPageModule.forChild(ExpandableLayout2),
    ],
    exports: [
        ExpandableLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ExpandableLayout2Module { }
