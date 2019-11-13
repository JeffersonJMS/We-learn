import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { ListComponent } from './page/list/list.component';
import { FormComponent } from './page/form/form.component';
import { QuizReportComponent } from './page/quiz-report/quiz-report.component';


@NgModule({
  declarations: [ListComponent, FormComponent, QuizReportComponent],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
