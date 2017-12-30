import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsLayout2 } from './maps-layout-2';

import { AppSettings } from '../../../services/app-settings';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [
        MapsLayout2,
    ],
    imports: [
        AgmCoreModule.forRoot(AppSettings.MAP_KEY),
        IonicPageModule.forChild(MapsLayout2),
    ],
    exports: [
        MapsLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MapsLayout2Module { }
