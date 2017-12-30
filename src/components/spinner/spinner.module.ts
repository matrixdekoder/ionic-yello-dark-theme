import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Spinner } from './spinner';

@NgModule({
    declarations: [
        Spinner,
    ],
    imports: [
        IonicPageModule.forChild(Spinner),
    ],
    exports: [
        Spinner
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SpinnerModule { }
