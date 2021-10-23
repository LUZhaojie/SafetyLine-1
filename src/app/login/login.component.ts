import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  loginForm!: FormGroup;

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      if (this.loginForm.controls.hasOwnProperty(i)) {
        this.loginForm.controls[i].markAsDirty();
        // verifier les inputs ne sont pas vides
        this.loginForm.controls[i].updateValueAndValidity();
        // changer la color des characteres
      }
    }
    if (!this.loginForm.valid){
      console.log('Login failed!');
      return;
    }
    console.log('Login success!',this.loginForm.value);
  }



  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      password: [null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{8,20}$/)]],
      //remember: [false]
    });
  }

}
