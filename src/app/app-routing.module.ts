import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";

// ng g m app-routing --flat --module=app

const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // router guard
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
