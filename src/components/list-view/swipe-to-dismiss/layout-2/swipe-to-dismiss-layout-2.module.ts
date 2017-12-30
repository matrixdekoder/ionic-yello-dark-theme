import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipeToDismissLayout2 } from './swipe-to-dismiss-layout-2';

@NgModule({
    declarations: [
        SwipeToDismissLayout2,
    ],
    imports: [
        IonicPageModule.forChild(SwipeToDismissLayout2),
    ],
    exports: [
        SwipeToDismissLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SwipeToDismissLayout2Module { }
