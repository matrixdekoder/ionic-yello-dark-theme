import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubImageGallery } from './sub-image-gallery';

@NgModule({
    declarations: [
        SubImageGallery,
    ],
    imports: [
        IonicPageModule.forChild(SubImageGallery),
    ],
    exports: [
        SubImageGallery
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SubImageGalleryModule { }
