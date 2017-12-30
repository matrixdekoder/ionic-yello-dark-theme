import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLayout3 } from './maps-layout-3';

import { AppSettings } from '../../../services/app-settings';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        MapsLayout3,
    ],
    imports: [
        AgmCoreModule.forRoot(AppSettings.MAP_KEY),
        IonicPageModule.forChild(MapsLayout3),
    ],
    exports: [
        MapsLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MapsLayout3Module { }
