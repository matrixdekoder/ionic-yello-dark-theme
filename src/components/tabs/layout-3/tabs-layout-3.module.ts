import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsLayout3 } from './tabs-layout-3';

@NgModule({
    declarations: [
        TabsLayout3,
    ],
    imports: [
        IonicPageModule.forChild(TabsLayout3),
    ],
    exports: [
        TabsLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TabsLayout3Module { }
