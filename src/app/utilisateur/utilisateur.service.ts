import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config';
import { User } from './utilisateur.type';

//ng g s utilisateur/utilisateur
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  delUser(id: number){
    //const token = localStorage.getItem('itcast-token');
    return this.http.delete(`${URL}/utilisateur/${id}`,{
      //headers: {
      //  Authorization: `Bearer ${token}`
      //}
    });
  }

  fetchData(curPage: number, pageSize: number){
    //const token = localStorage.getItem('itcast-token');
    const userURL = `${URL}/utilisateur?_page=${curPage}&_limit=${pageSize}`;
    return this.http.get<User[]>(userURL,
      {
        observe: 'response',
        //headers:{
        //  Authorization: `Bearer ${token}`
        //}
      }
      )
  }


}
