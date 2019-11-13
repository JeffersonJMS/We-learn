import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrivateComponent } from "./private.component";
import { HomeComponent } from "../public/pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: PrivateComponent,
    children: [
      { path: "", component: HomeComponent },
      {
        path: "quiz",
        loadChildren: () =>
          import("./modules/quiz/quiz.module").then(mod => mod.QuizModule)
      },
      {
        path: "classroom",
        loadChildren: () =>
          import("./modules/classroom/classroom.module").then(
            mod => mod.ClassroomModule
          )
      },
      {
        path: "student",
        loadChildren: () =>
          import("./modules/student/student.module").then(
            mod => mod.StudentModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
