import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSubImageGallery } from './item-details-sub-image-gallery';

import { SubImageGalleryModule } from '../../components/sub-image-gallery/sub-image-gallery.module';

@NgModule({
  declarations: [
    ItemDetailsPageSubImageGallery,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageSubImageGallery),
    SubImageGalleryModule
  ],
  exports: [
    ItemDetailsPageSubImageGallery
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageSubImageGalleryModule {}
