import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageImageGallery } from './item-details-image-gallery';

import { ImageGalleryLayout1Module } from '../../components/image-gallery/layout-1/image-gallery-layout-1.module';
import { ImageGalleryLayout2Module } from '../../components/image-gallery/layout-2/image-gallery-layout-2.module';
import { SubImageGalleryModule } from '../../components/sub-image-gallery/sub-image-gallery.module';

@NgModule({
  declarations: [
    ItemDetailsPageImageGallery,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageImageGallery),
    ImageGalleryLayout1Module, ImageGalleryLayout2Module, SubImageGalleryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageImageGalleryModule { }
