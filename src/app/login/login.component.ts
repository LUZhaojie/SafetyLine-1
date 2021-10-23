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
      console.log('Login success!');
      localStorage.setItem('itcast-token', res.token);
      this.router.navigate(['/home'])
    }
    );
  }



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{8,20}$/)]],
      //remember: [false]
    });
  }

}
