import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage3 } from './tab-page-3';

@NgModule({
    declarations: [
        TabPage3,
    ],
    imports: [
        IonicPageModule.forChild(TabPage3),
    ],
    exports:[
        TabPage3
    ]
})

export class TabPage3Module { }
