import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailsPageSpinner } from './item-details-spinner';

import { SpinnerModule } from '../../components/spinner/spinner.module';

@NgModule({
  declarations: [
    ItemDetailsPageSpinner,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailsPageSpinner),
    SpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ItemDetailsPageSpinnerModule {}
