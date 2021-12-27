import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from "../../utilisateur/utilisateur.service";
import { User} from "../../utilisateur/utilisateur.type";
import { HttpResponse } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd/message";
import {Issue} from "../issue.type";
import {IssueService} from "../issue.service";

//ng g c utilisateur/user-list

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UtilisateurService, private nzmsgService: NzMessageService, private issueServeice: IssueService) { }


  // @ts-ignore
  listOfUser: User[];

  curPage = 1;
  pageSize = 5;
  //total: number;

  trackByUserId(id: number, user: User){
    return user.id
  }


  fetchUser(){
    this.userService.fetchData(this.curPage,this.pageSize).subscribe((res: HttpResponse<User[]>)=>
    {
      console.log('Get data ',res);
      //this.total = +res.headers.get('X-Total-Count');
      // @ts-ignore
      this.listOfUser = res.body;
    })
  }

  isVisible = false;

  id ?: number;
  // @ts-ignore
  listOfIssue:Issue[];

  showModal(username:string): void {
    const token = localStorage.getItem('role-token')
    // @ts-ignore
    if (token != 1){
      this.nzmsgService.info('You do not have the access!',{ nzDuration: 1000});
    }else {
      this.isVisible = true;
      this.issueServeice.fetchIssueByName(username).subscribe((res: HttpResponse<Issue[]>) => {
        console.log('Get issues by name', res);
        // @ts-ignore
        this.listOfIssue = res.body;
      })
    }
  }

  handleModifierOk(): void {
    this.isVisible = false;
    location.reload();
  }

  handleModifierCancel(): void {
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.fetchUser();
  }

}
