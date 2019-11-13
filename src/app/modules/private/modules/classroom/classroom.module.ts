import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ListComponent } from './page/list/list.component';
import { FormComponent } from './page/form/form.component';


@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ]
})
export class ClassroomModule { }
