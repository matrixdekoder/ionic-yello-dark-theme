import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage6 } from './tab-page-6';

@NgModule({
    declarations: [
        TabPage6,
    ],
    imports: [
        IonicPageModule.forChild(TabPage6),
    ],
    exports:[
        TabPage6
    ]
})

export class TabPage6Module { }
