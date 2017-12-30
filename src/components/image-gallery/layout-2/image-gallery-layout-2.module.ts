import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageGalleryLayout2 } from './image-gallery-layout-2';

@NgModule({
    declarations: [
        ImageGalleryLayout2,
    ],
    imports: [
        IonicPageModule.forChild(ImageGalleryLayout2),
    ],
    exports: [
        ImageGalleryLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ImageGalleryLayout2Module { }
