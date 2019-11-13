import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, SignInComponent],
  imports: [CommonModule, PublicRoutingModule]
})
export class PublicModule {}
