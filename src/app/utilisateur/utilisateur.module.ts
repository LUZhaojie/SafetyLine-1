import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserSupComponent } from './user-sup/user-sup.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserSupComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class UtilisateurModule { }
