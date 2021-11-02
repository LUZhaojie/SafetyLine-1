import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from "../utilisateur.service";
import { User } from '../utilisateur.type';
import { HttpResponse } from "@angular/common/http";
import { NzMessageService } from "ng-zorro-antd/message";

//ng g c utilisateur/user-list

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UtilisateurService, private nzmsgService: NzMessageService) { }


  //listOfUser: User[] | undefined;

  listOfUser: User[] = [
    {
      id: 1, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },
    {
      id: 2, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },
    {
      id: 3, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },
    {
      id: 4, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },
    {
      id: 5, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },
    {
      id: 6, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },{
      id: 7, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },{
      id: 8, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },{
      id: 9, name: 'YANG', mail: 'ch@gmail.com', time: 10
    },
    {
      id: 10, name: 'YANG', mail: 'ch@gmail.com', time: 10
    }
  ]

  curPage = 1;
  pageSize = 5;
  //total: number;

  handleDel(id: number){
    console.log('Delete!',id);
    this.userService.delUser(id).subscribe(res =>{
        console.log(res);
        this.listOfUser = this.listOfUser.filter(user => user.id !== id);
    })
  }

  handleDelCan(){
    console.log('Cancel delete!');
    this.nzmsgService.info('Cancel delete!',{ nzDuration: 1000});
  }

  trackByUserId(id: number, user: User){
    return user.id
  }

  fetchUser(){
    this.userService.fetchData(this.curPage,this.pageSize).subscribe((res: HttpResponse<User[]>)=>
    {
      console.log(res);
      //this.total = +res.headers.get('X-Total-Count');
      // @ts-ignore
      this.listOfUser = res.body;
    })
  }

  ngOnInit(): void {
    //this.fetchUser();
  }

}
