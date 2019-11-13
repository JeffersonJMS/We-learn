import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuizComponent } from "./page/quiz/quiz.component";
import { MyQuizzesComponent } from "./page/my-quizzes/my-quizzes.component";
import { HomeComponent } from "./page/home/home.component";

const routes: Routes = [
  { path: "quiz/:id", component: QuizComponent },
  { path: "quiz", component: MyQuizzesComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
