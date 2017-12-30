import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSwipeToDismiss } from './item-details-swipe-to-dismiss';

import { SwipeToDismissLayout1Module } from '../../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module';
import { SwipeToDismissLayout2Module } from '../../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module';
import { SwipeToDismissLayout3Module } from '../../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageSwipeToDismiss,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageSwipeToDismiss),
    SwipeToDismissLayout1Module, SwipeToDismissLayout2Module, 
    SwipeToDismissLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageSwipeToDismissModule {}
