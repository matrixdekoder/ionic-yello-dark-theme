import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageTextView } from './item-details-text-view';

@NgModule({
    declarations: [
        ItemDetailsPageTextView,
    ],
    imports: [
        IonicPageModule.forChild(ItemDetailsPageTextView),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageTextViewModule { }
