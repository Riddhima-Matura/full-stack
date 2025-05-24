import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getloginForm()
  }

  getloginForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }
  generateNewCaptcha() {

  }


  generateCaptcha(length: number) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghijklmnopqrstuvwxyz0123456789'
    let captcha = ''
    for (let i = 0; i < length; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha
  }

  onSubmit() {
    let password =  '1234567';
    let username = 'ridd@gmail.com'
    let enterPass = this.loginForm.get('password')?.value;
    let enterUser = this.loginForm.get('username')?.value;

    if (password != enterPass || username != enterUser) {
      console.log("incorrect data");
      console.log(enterUser,enterPass,username,password);
      

    } else {
      this.route.navigate(['main/pages/dashboard'])
    }
  }
}
