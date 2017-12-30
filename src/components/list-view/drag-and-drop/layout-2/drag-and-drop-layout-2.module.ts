import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragAndDropLayout2 } from './drag-and-drop-layout-2';

@NgModule({
    declarations: [
        DragAndDropLayout2,
    ],
    imports: [
        IonicPageModule.forChild(DragAndDropLayout2),
    ],
    exports: [
        DragAndDropLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DragAndDropLayout2Module { }
