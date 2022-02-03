import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginForm } from "./login.type";
import { URL } from '../config'

// ng g s login/login
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm){
    //console.log(loginForm)
    return this.http.post(`${URL}/user/login?username=${loginForm.username}&password=${loginForm.password}`, loginForm, {
      headers:{
        'No-auth': 'TRUE'
      }
    });
  }

}
