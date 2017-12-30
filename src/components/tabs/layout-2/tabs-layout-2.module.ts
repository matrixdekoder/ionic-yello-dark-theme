import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsLayout2 } from './tabs-layout-2';

@NgModule({
    declarations: [
        TabsLayout2,
    ],
    imports: [
        IonicPageModule.forChild(TabsLayout2),
    ],
    exports: [
        TabsLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TabsLayout2Module { }
