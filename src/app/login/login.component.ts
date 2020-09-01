import { Component, OnInit } from '@angular/core';

import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';
import { LoginViewModel } from '../models/LoginViewModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginViewModel: LoginViewModel = new LoginViewModel();
  loginError :string ="";
  
  constructor(private loginService:LoginService,private router: Router) { }
  ngOnInit(): void {
    this.loginViewModel.UserName = "";
    this.loginViewModel.Password ="";
  }
  onLoginClick(event)  
  {   
    debugger 
    if(this.loginViewModel.UserName =="" && this.loginViewModel.Password =="")
    this.loginError ="Please enter User Name and Password"
    else if(this.loginViewModel.UserName =="")
    this.loginError = "Please enter UserName"
    else if(this.loginViewModel.Password =="")
    this.loginError = "Please enter Password"
    else
    this.router.navigate([ "/admin", "dashboard"]);

  }
}
