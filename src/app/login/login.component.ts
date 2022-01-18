import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }

  public usuarios: User[] = [
    {username: "Admin", password: "admin"},
  ];


  message: string | undefined;
  returnUrl: string | undefined;


  error = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  login() {
    const data: User = {
      username: this.user.username,
      password: this.user.password
    }
    let found = false;
    for(let x = 0; x<this.usuarios.length; x++){
      if(data.username == this.usuarios[x].username && data.password == this.usuarios[x].password){
        found = true;
        break;
      }
    }
    //if (data.username == this.userPredeterminado.username && data.password == this.userPredeterminado.password) {
    if(found){
      console.log("Login successful");
      //this.authService.authLogin(this.model);
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', <string>data.username);
      this.router.navigate([this.returnUrl]);
    }
    else {
      this.message = "Please check your userid and password";
      this.error = true;
    }
  }

  tryAgain(): void{
    this.error = false;
    this.user = {
      username: '',
      password: ''
    }
  }

  userPredeterminado: User = {
    username: "Admin",
    password: "admin"
  }
}
