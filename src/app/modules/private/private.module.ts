import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PrivateComponent } from '../private/private.component';


@NgModule({
  declarations: [HomeComponent, PrivateComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
