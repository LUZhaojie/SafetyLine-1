import { Component, OnInit } from '@angular/core';
import {IssueService} from "../issue.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {Issue} from "../issue.type";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-issue-valid',
  templateUrl: './issue-valid.component.html',
  styleUrls: ['./issue-valid.component.css']
})
export class IssueValidComponent implements OnInit {
  constructor(private issueService: IssueService, private nzmsgService: NzMessageService) { }


  // @ts-ignore
  listOfIssue: Issue[];
  curPage = 1;
  pageSize = 5;
  chiffrement ?: string;
  id ?: number;
  fetchIssue(){

    this.issueService.refreshIssue().subscribe(res=>{
      console.log(res)
    })

    this.issueService.fetchIssue(this.curPage,this.pageSize).subscribe((res: HttpResponse<Issue[]>)=>
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

  showModal(id:number, updated:number): void {
    const roleToken = localStorage.getItem('role-token')
    // @ts-ignore
    if (roleToken != 1){
      this.nzmsgService.info('You do not have the access!',{ nzDuration: 1000});
    }else {
      if (updated == 1){
        this.nzmsgService.info('This task cant be modified!',{ nzDuration: 1000});
      }
      else{
        this.isVisible = true;
        // @ts-ignore
        this.issueService.getIssueId(id).subscribe((issue: Issue) => {
          //console.log(issue)
          this.id = id
        })
      }
    }
  }

  handleModifierOk(): void {
    if (this.chiffrement != null) {
      if (this.id != null) {
        this.issueService.editTimeAdmin(this.id, this.chiffrement).subscribe(res => {
          console.log(this.id,this.chiffrement)
        })
        this.fetchIssue()
      }
    }
    this.isVisible = false;
    this.nzmsgService.info('Verify modification', {nzDuration:1000});
    location.reload();
  }

  handleModifierCancel(): void {
    this.isVisible = false;
    this.nzmsgService.info('Cancel modification', {nzDuration:1000});
  }

  handleValid(id:number,updated:number): void{
    const token = localStorage.getItem('role-token')
    // @ts-ignore
    if (token != 1){
      this.nzmsgService.info('You do not have the access!',{ nzDuration: 1000});
    }else {
      if (updated == 1){
        this.nzmsgService.info('This task has been valid!',{ nzDuration: 1000});
      }
      else {
        this.issueService.validIssue(id).subscribe(res => {
          console.log(res);
        })
        this.fetchIssue()
        this.nzmsgService.info('Verify validation', {nzDuration: 1000});
        location.reload();
      }
    }
  }

  handleValidCan(): void{
    this.nzmsgService.info('Cancel validation', {nzDuration:1000});
  }

  ngOnInit(): void {
    this.fetchIssue();
  }

}
