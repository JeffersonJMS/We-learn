import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./page/form/form.component";
import { ListComponent } from "./page/list/list.component";

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "list", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule {}
