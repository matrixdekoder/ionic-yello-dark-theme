import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage1 } from './tab-page-1';

@NgModule({
    declarations: [
        TabPage1,
    ],
    imports: [
        IonicPageModule.forChild(TabPage1),
    ],
    exports:[
        TabPage1
    ]
})

export class TabPage1Module { }
