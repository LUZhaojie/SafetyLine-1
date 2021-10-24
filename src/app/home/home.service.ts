import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { URL } from "../config";

// ng g s home/home
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  logout(){
    const token = localStorage.getItem('itcast-token');
    return this.http.delete(`${URL}/tokens`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  }

}
