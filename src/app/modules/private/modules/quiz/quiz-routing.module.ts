import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./page/form/form.component";
import { ListComponent } from "./page/list/list.component";
import { QuizReportComponent } from "./page/quiz-report/quiz-report.component";

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "list", component: ListComponent },
  { path: "report", component: QuizReportComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
