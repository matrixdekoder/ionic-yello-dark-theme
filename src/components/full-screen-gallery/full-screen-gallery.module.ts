import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullScreenGallery } from './full-screen-gallery';

@NgModule({
    declarations: [
        FullScreenGallery,
    ],
    imports: [
        IonicPageModule.forChild(FullScreenGallery),
    ],
    exports: [
        FullScreenGallery
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class FullScreenGalleryModule { }
