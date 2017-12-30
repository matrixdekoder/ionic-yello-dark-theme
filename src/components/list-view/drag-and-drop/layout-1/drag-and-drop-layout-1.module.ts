import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragAndDropLayout1 } from './drag-and-drop-layout-1';

@NgModule({
    declarations: [
        DragAndDropLayout1,
    ],
    imports: [
        IonicPageModule.forChild(DragAndDropLayout1),
    ],
    exports: [
        DragAndDropLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DragAndDropLayout1Module { }
