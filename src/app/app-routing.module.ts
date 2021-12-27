import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./auth.guard";
import {UtilisateurModule} from "./utilisateur/utilisateur.module";

// ng g m app-routing --flat --module=app

const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // router guard
    canActivate: [AuthGuard],

    children:[
      {
        path: 'utilisateur',
        // path#module_name
        loadChildren: () => import('./utilisateur/utilisateur.module').then(mod => mod.UtilisateurModule)
      },
      {
        path: 'issue',
        loadChildren: () => import('./issue/issue.module').then(mod => mod.IssueModule)
      }

    ]
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
