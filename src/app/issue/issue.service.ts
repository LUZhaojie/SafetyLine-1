import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config';
import { Issue } from './issue.type';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }


  refreshIssue(){
    const refreshURL = `${URL}/issue/refresh`;
    return this.http.post(refreshURL,{});
  }

  fetchIssueNonChiffre(curPage: number, pageSize: number){
    const token = localStorage.getItem('user-token');
    const issueURL = `${URL}/issue/issuelist?_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Issue[]>(issueURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    )
  }

  fetchIssue(curPage: number, pageSize: number){
    const token = localStorage.getItem('user-token');
    const issueURL = `${URL}/issue/bytimeorder?_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Issue[]>(issueURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    )
  }

  fetchIssueByName(username:string){
    const token = localStorage.getItem('user-token');
    const issueURL =  `${URL}/issue/editor?username=${username}`
    return this.http.get<Issue[]>(issueURL,
      {
        observe: 'response',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  }

  getIssueId(id:number){
    const token = localStorage.getItem('user-token');
    const issueURL = `${URL}/issue?id=${id}`;
    return this.http.get<Issue>(issueURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
  }

  editTime(id:number,time:string){
    const token = localStorage.getItem('user-token');
    const username = localStorage.getItem('username-token');
    const timeURL = `${URL}/issue/setEstimateTimeFirst?id=${id}&username=${username}&time=${time}`
    return this.http.post(timeURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
  }

  editTimeAdmin(id:number,time:string){
    const token = localStorage.getItem('user-token');
    const timeURL = `${URL}/issue/setEstimateTime?id=${id}&time=${time}`
    return this.http.post(timeURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
  }

  validIssue(id:number){
    const token = localStorage.getItem('user-token');
    const timeURL = `${URL}/issue/valide?id=${id}`
    return this.http.post(timeURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
  }

}
