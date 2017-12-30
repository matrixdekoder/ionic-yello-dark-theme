import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLayout2 } from './login-layout-2';

@NgModule({
    declarations: [
        LoginLayout2,
    ],
    imports: [
        IonicPageModule.forChild(LoginLayout2),
    ],
    exports: [
        LoginLayout2
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LoginLayout2Module { }
