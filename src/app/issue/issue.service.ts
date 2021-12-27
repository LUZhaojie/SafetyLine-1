import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config';
import { Issue } from './issue.type';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { }

  fetchAllIssue(curPage: number, pageSize: number){
    const token = localStorage.getItem('itcast-token');
    const refreshURL = `${URL}/issue/refresh`;
    this.http.post(refreshURL,{});
    console.log("Refresh!")
    const issueURL = `${URL}/issue/all?_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<Issue[]>(issueURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    )
  }

}
