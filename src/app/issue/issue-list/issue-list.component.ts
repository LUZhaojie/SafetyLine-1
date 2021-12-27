import { Component, OnInit } from '@angular/core';
import { IssueService } from "../issue.service";
import { Issue } from '../issue.type';
import { HttpResponse } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd/message";



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
  fetchIssue(){
    this.issueService.fetchAllIssue(this.curPage,this.pageSize).subscribe((res: HttpResponse<Issue[]>)=>
    {
      console.log('Get data ',res);
      //this.total = +res.headers.get('X-Total-Count');
      // @ts-ignore
      this.listOfIssue = res.body;
    })
  }

  trackByUserId(id: number, issue: Issue){
    return issue.id
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  ngOnInit(): void {
    this.fetchIssue();
  }

}
