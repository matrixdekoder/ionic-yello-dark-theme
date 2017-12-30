import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBarLayout1 } from './search-bar-layout-1';

@NgModule({
    declarations: [
        SearchBarLayout1,
    ],
    imports: [
        IonicPageModule.forChild(SearchBarLayout1),
    ],
    exports: [
        SearchBarLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SearchBarLayout1Module { }
