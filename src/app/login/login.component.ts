import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service'
import { Router } from '@angular/router'
import { LoginForm } from "./login.type"

// ng g c login

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginService: LoginService,private router: Router) {}

  loginForm!: FormGroup;

  submitForm(): void {
    const loginForm = this.loginForm;
    const{ controls } = loginForm;

    for (const i in controls) {
      if (controls.hasOwnProperty(i)) {
        controls[i].markAsDirty();
        // verifier les inputs ne sont pas vides
        controls[i].updateValueAndValidity();
        // changer la color des characteres
      }
    }

    if (!loginForm.valid){
      console.log('Login failed!');
      return;
    }
    //console.log('Login success!',this.loginForm.value);
    const {username, password} = loginForm.value;

    const loginParameters: LoginForm = {
      username,
      password
    }

    this.loginService.login(loginParameters).subscribe((res: any) => {
      if (res){
        console.log('Login success!');
        console.log('res',res)
        localStorage.setItem('itcast-token', res);
        localStorage.setItem('username-token', res.username);
        localStorage.setItem('role-token', res.role);
        localStorage.setItem('email-token', res.email);
        localStorage.setItem('id-token', res.id);
        this.router.navigate(['/home'])
      }else{
        console.log('Login failed!');
        console.log(res)
        this.router.navigate(['/login'])
      }
    }
    );
  }



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,20}$/)]],
      //remember: [false]
    });
  }

}
