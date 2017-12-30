import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxLayout3 } from './parallax-layout-3';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';

@NgModule({
    declarations: [
        ParallaxLayout3,
    ],
    imports: [
        IonicPageModule.forChild(ParallaxLayout3),
        ElasticHeaderModule
    ],
    exports: [
        ParallaxLayout3
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ParallaxLayout3Module { }
