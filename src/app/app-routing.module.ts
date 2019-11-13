import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/public/public.module").then(mod => mod.PublicModule)
  },
  {
    path: "private",
    loadChildren: () =>
      import("./modules/private/private.module").then(mod => mod.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
