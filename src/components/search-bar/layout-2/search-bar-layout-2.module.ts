import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchBarLayout2 } from './search-bar-layout-2';

@NgModule({
    declarations: [
        SearchBarLayout2,
    ],
    imports: [
        IonicPageModule.forChild(SearchBarLayout2),
    ],
    exports: [
        SearchBarLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SearchBarLayout2Module { }
