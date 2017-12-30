import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage4 } from './tab-page-4';

@NgModule({
    declarations: [
        TabPage4,
    ],
    imports: [
        IonicPageModule.forChild(TabPage4),
    ],
    exports:[
        TabPage4
    ]
})

export class TabPage4Module { }
