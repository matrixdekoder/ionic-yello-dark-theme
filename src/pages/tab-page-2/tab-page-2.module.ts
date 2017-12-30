import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabPage2 } from './tab-page-2';

@NgModule({
    declarations: [
        TabPage2,
    ],
    imports: [
        IonicPageModule.forChild(TabPage2),
    ],
    exports:[
        TabPage2
    ]
})

export class TabPage2Module { }
