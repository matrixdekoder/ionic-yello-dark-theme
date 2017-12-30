import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSearchBar } from './item-details-search-bar';

import { SearchBarLayout1Module } from '../../components/search-bar/layout-1/search-bar-layout-1.module';
import { SearchBarLayout2Module } from '../../components/search-bar/layout-2/search-bar-layout-2.module';
import { SearchBarLayout3Module } from '../../components/search-bar/layout-3/search-bar-layout-3.module';

@NgModule({
  declarations: [
    ItemDetailsPageSearchBar,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageSearchBar),
    SearchBarLayout1Module, SearchBarLayout2Module, SearchBarLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageSearchBarModule {}
