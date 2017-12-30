import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageFullScreenGallery } from './item-details-full-screen-gallery';

import { FullScreenGalleryModule } from '../../components/full-screen-gallery/full-screen-gallery.module';

@NgModule({
  declarations: [
    ItemDetailsPageFullScreenGallery,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageFullScreenGallery),
    FullScreenGalleryModule
  ],
  exports: [
    ItemDetailsPageFullScreenGallery
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageFullScreenGalleryModule {}
