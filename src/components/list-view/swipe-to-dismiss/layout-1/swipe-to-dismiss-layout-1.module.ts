import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeToDismissLayout1 } from './swipe-to-dismiss-layout-1';

@NgModule({
    declarations: [
        SwipeToDismissLayout1,
    ],
    imports: [
        IonicPageModule.forChild(SwipeToDismissLayout1),
    ],
    exports: [
        SwipeToDismissLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwipeToDismissLayout1Module { }
