import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemsPage } from './items';

@NgModule({
    declarations: [
        ItemsPage,
    ],
    imports: [
        IonicPageModule.forChild(ItemsPage),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemsPageModule { }
