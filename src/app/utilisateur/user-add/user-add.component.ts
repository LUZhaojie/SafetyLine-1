import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';

//ng g c utilisateur/user-add
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.userAddForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      checkPassword: ['']
    })
  }

  userAddForm!: FormGroup;

  submitForm(): void {
    for (const i in this.userAddForm.controls) {
      if (this.userAddForm.controls.hasOwnProperty(i)) {
        this.userAddForm.controls[i].markAsDirty();
        this.userAddForm.controls[i].updateValueAndValidity();
      }
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.userAddForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.userAddForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  resetForm(e:MouseEvent):void {
    e.preventDefault();
    this.userAddForm.reset();
    for (const i in this.userAddForm.controls) {
      if (this.userAddForm.controls.hasOwnProperty(i)) {
        this.userAddForm.controls[i].markAsDirty();
        this.userAddForm.controls[i].updateValueAndValidity();
      }
    }
  }

  ngOnInit(): void {
    this.userAddForm = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }
}
