import { Component, OnInit } from '@angular/core';
import { audit } from 'rxjs';
import { LoginForm } from '../models/loginForm.model';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

login(data:any){
  const loginForm : LoginForm= new LoginForm(data.username , data.password);
  this.authService.login(loginForm).subscribe()

  

}

}
