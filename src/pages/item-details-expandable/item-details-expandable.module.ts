import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageExpandable } from './item-details-expandable';

import { ExpandableLayout1Module } from '../../components/list-view/expandable/layout-1/expandable-layout-1.module';
import { ExpandableLayout2Module } from '../../components/list-view/expandable/layout-2/expandable-layout-2.module';
import { ExpandableLayout3Module } from '../../components/list-view/expandable/layout-3/expandable-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageExpandable,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageExpandable),
    ExpandableLayout1Module, ExpandableLayout2Module, 
    ExpandableLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageExpandableModule { }
