import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterLayout2 } from './register-layout-2';

@NgModule({
    declarations: [
        RegisterLayout2,
    ],
    imports: [
        IonicPageModule.forChild(RegisterLayout2),
    ],
    exports: [
        RegisterLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class RegisterLayout2Module { }
