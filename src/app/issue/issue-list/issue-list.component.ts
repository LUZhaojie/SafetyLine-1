import { Component, OnInit } from '@angular/core';
import { IssueService } from "../issue.service";
import { Issue } from '../issue.type';
import { HttpResponse } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd/message";
import { NgModel } from "@angular/forms";

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  constructor(private issueService: IssueService, private nzmsgService: NzMessageService) { }


  // @ts-ignore
  listOfIssue: Issue[];
  curPage = 1;
  pageSize = 5;
  chiffrement ?: string;
  id ?: number;
  fetchIssue(){

    this.issueService.refreshIssue().subscribe(res=>{
      //console.log(res)
    })

    this.issueService.fetchIssueNonChiffre(this.curPage,this.pageSize).subscribe((res: HttpResponse<Issue[]>)=>
    {
      //console.log('Get data ',res);
      //this.total = +res.headers.get('X-Total-Count');
      // @ts-ignore
      this.listOfIssue = res.body;
    })
  }

  trackByUserId(id: number, issue: Issue){
    return issue.id
  }

  isVisible = false;

  showModal(id:number): void {
    this.isVisible = true;
    // @ts-ignore
    this.issueService.getIssueId(id).subscribe((issue:Issue) => {
      //console.log(issue)
      this.id = id
    })
  }

  handleOk(): void {
    if (this.chiffrement != null) {
      if (this.id != null) {
        this.issueService.editTime(this.id, this.chiffrement).subscribe(res => {
          //console.log(res)
        })
      }
    }
    this.isVisible = false;
    location.reload();
  }

  handleCancel(): void {
    this.isVisible = false;
  }


  ngOnInit(): void {
    this.fetchIssue();
  }

}
