import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragAndDropLayout3 } from './drag-and-drop-layout-3';

@NgModule({
    declarations: [
        DragAndDropLayout3,
    ],
    imports: [
        IonicPageModule.forChild(DragAndDropLayout3),
    ],
    exports: [
        DragAndDropLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DragAndDropLayout3Module { }
