import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeToDismissLayout3 } from './swipe-to-dismiss-layout-3';

@NgModule({
    declarations: [
        SwipeToDismissLayout3,
    ],
    imports: [
        IonicPageModule.forChild(SwipeToDismissLayout3),
    ],
    exports: [
        SwipeToDismissLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwipeToDismissLayout3Module { }
