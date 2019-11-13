import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "sign-in", component: SignInComponent },
  { path: "", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
