import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";

// ng g c home

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService, private router: Router, private nzmsg:NzMessageService) { }

  isCollapsed = false;
  username !: string;
  showFlag !: boolean;

  logout() {
    //console.log('Try to logout!')
    localStorage.removeItem('user-token')
    localStorage.removeItem('username-token');
    localStorage.removeItem('role-token');
    localStorage.removeItem('email-token');
    localStorage.removeItem('id-token');
    //console.log('Exit success!');
    this.router.navigate(['/login']);
    /*
    this.homeService.logout().subscribe(
      res =>{
        localStorage.removeItem('user-token');
        console.log('Exit success!',res);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log('Exit failed!',err);
        this.nzmsg.create('warning','Veuillez ressayer!');
      }
      );

     */
  }

  Reset() {
    const role = localStorage.getItem('role-token')
    // @ts-ignore
    if (role==1){
      this.homeService.reset().subscribe(res =>{
        //console.log("Reset all issues!")
        this.nzmsg.info('All issues are reset!')
      })
    }else{
      this.nzmsg.info("Vous n\'avez pas le droit de le faire!",{ nzDuration: 1000});
    }

  }

  ngOnInit(): void {
    // @ts-ignore
    this.username = localStorage.getItem('username-token')
    // @ts-ignore
    this.showFlag = localStorage.getItem('role-token') != 1;
    this.router.navigate(['/home/issue'])
    let beginTime = 0;
    let differTime = 0;
    const interval = 5;
    window.onunload = function () {
      differTime = new Date().getTime() - beginTime;
      if (differTime <= interval) {
        localStorage.removeItem('user-token')
        localStorage.removeItem('username-token');
        localStorage.removeItem('role-token');
        localStorage.removeItem('email-token');
        localStorage.removeItem('id-token');
      } else {
        //console.log("F5");
      }
    };
    window.onbeforeunload = function () {
      beginTime = new Date().getTime();
    };
  }
}
