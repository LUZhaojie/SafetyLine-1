import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IssueListComponent} from "./issue-list/issue-list.component";
import {IssueValidComponent} from "./issue-valid/issue-valid.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {
    path: '',
    component: IssueListComponent
  },
  {
    path: 'valid',
    component: IssueValidComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueRoutingModule { }
