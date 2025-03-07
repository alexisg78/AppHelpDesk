import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthLoginComponent } from './pages/login/login.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlertModule } from '../sweet-alert/sweet-alert.module';


@NgModule({
  declarations: [
    LayoutComponent,
    AuthLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    SweetAlertModule
  ],
})
export class AuthModule { }
