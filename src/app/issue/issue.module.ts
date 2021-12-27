import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueListComponent} from "./issue-list/issue-list.component";
import { IssueRoutingModule } from './issue-routing.module';
import {UtilisateurRoutingModule} from "../utilisateur/utilisateur-routing.module";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzModalModule} from "ng-zorro-antd/modal";
import { FormsModule } from '@angular/forms';
import { IssueValidComponent } from './issue-valid/issue-valid.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    IssueListComponent,
    IssueValidComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    IssueRoutingModule,
    CommonModule,
    UtilisateurRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzPopconfirmModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzModalModule,
    FormsModule
  ]
})
export class IssueModule { }
