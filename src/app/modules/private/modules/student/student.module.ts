import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentRoutingModule } from "./student-routing.module";
import { HomeComponent } from "./page/home/home.component";
import { QuizComponent } from "./page/quiz/quiz.component";
import { MyQuizzesComponent } from "./page/my-quizzes/my-quizzes.component";
import { QuizCardComponent } from "./components/quiz-card/quiz-card.component";

@NgModule({
  declarations: [
    HomeComponent,
    QuizComponent,
    MyQuizzesComponent,
    QuizCardComponent
  ],
  imports: [CommonModule, StudentRoutingModule]
})
export class StudentModule {}
