import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Form } from '../form';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  form: Form;

  constructor() {}

  onSubmit(){
    console.log(this.loginForm.value);
    const { username, password } = this.loginForm.value;
    console.log('username is', username);
    console.log('password is', password);
  }

  submit(){
    console.log('form submitted');
  }

  // changeUser(){
  //   console.log(this.userName)
  // }

  ngOnInit(): void {}
}
