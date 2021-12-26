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

  logout() {
    console.log('Try to logout!')
    localStorage.removeItem('itcast-token')
    localStorage.removeItem('username-token');
    localStorage.removeItem('role-token');
    localStorage.removeItem('email-token');
    localStorage.removeItem('id-token');
    console.log('Exit success!');
    this.router.navigate(['/login']);
    /*
    this.homeService.logout().subscribe(
      res =>{
        localStorage.removeItem('itcast-token');
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

  ngOnInit(): void {
  }

}
