import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage5 } from './tab-page-5';

@NgModule({
    declarations: [
        TabPage5,
    ],
    imports: [
        IonicPageModule.forChild(TabPage5),
    ],
    exports:[
        TabPage5
    ]
})

export class TabPage5Module { }
