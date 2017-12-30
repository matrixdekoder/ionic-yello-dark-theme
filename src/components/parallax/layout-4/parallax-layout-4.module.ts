import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxLayout4 } from './parallax-layout-4';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';

@NgModule({
    declarations: [
        ParallaxLayout4,
    ],
    imports: [
        IonicPageModule.forChild(ParallaxLayout4),
        ElasticHeaderModule
    ],
    exports: [
        ParallaxLayout4
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ParallaxLayout4Module { }
