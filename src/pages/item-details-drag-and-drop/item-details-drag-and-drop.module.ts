import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageDragAndDrop } from './item-details-drag-and-drop';

import { DragAndDropLayout1Module } from '../../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module';
import { DragAndDropLayout2Module } from '../../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module';
import { DragAndDropLayout3Module } from '../../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageDragAndDrop,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageDragAndDrop),
    DragAndDropLayout1Module, DragAndDropLayout2Module, DragAndDropLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageDragAndDropModule {}
