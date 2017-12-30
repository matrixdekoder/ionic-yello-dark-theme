import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBarLayout3 } from './search-bar-layout-3';

@NgModule({
    declarations: [
        SearchBarLayout3,
    ],
    imports: [
        IonicPageModule.forChild(SearchBarLayout3),
    ],
    exports: [
        SearchBarLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SearchBarLayout3Module { }
