import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL,GITLINK } from "../config";

// ng g s home/home
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  /*
  logout(){
    const token = localStorage.getItem('itcast-token');
    return this.http.post(`${URL}/tokens`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  }

   */
  reset() {
    const token = localStorage.getItem('itcast-token');
    return this.http.post(`${URL}/issue/resetAll`, {
      headers: {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    })
  }
}
