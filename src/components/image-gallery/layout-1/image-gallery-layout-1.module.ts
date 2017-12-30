import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageGalleryLayout1 } from './image-gallery-layout-1';


@NgModule({
    declarations: [
        ImageGalleryLayout1
    ],
    imports: [
        IonicPageModule.forChild(ImageGalleryLayout1)
    ],
    exports: [
        ImageGalleryLayout1
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ImageGalleryLayout1Module { }
