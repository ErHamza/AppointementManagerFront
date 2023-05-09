import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { audit, pipe, take } from 'rxjs';
import { LoginForm } from '../models/loginForm.model';
import { User } from '../models/user.model';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  constructor(private authService : AuthService, private route : Router) { }
 

  ngOnInit(): void {
  }

login(data:LoginForm){
  console.log(data)
  
  this.authService.login(data).pipe().subscribe(()=>{}, error=>{

      alert("Incorrect Credential")

    
  })
 
 

  

}



ngOnDestroy(): void {
  
}

}
