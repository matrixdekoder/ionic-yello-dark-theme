import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxLayout2 } from './parallax-layout-2';
import { ElasticHeaderModule } from '../../elastic-header/elastic-header.module';

@NgModule({
    declarations: [
        ParallaxLayout2,
    ],
    imports: [
        IonicPageModule.forChild(ParallaxLayout2),
        ElasticHeaderModule
    ],
    exports: [
        ParallaxLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ParallaxLayout2Module { }
