import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config';
import { User } from './utilisateur.type';
import { userAddForm} from "./user-add/user-add.type";
import {FormGroup} from "@angular/forms";

//ng g s utilisateur/utilisateur
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  delUser(id: number){
    const token = localStorage.getItem('id-token');
    return this.http.delete(`${URL}/user/delete?id=${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  changeRoleUser(id:number){
    const  token = localStorage.getItem('role-token');
    return this.http.post(`${URL}/user/roleChange?id=${id}`,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
  }

  fetchData(curPage: number, pageSize: number){
    const token = localStorage.getItem('user-token');
    const userURL = `${URL}/user/all?_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<User[]>(userURL,
      {
        observe: 'response',
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
      )
  }

  addUser(userForm: userAddForm){
    console.log(userForm)
    return this.http.post(
      `${URL}/user/saveUser?
      username=${userForm.username}
      &password=${userForm.password}
      &email=${userForm.email}
      &role=${userForm.role}`,userForm,
      {
        observe: 'response'
      })
  }


}
