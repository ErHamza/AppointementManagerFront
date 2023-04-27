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
  
  this.authService.login(data).pipe(take(1)).subscribe(res=>{
    if(res){
      // const user  = this.authService.UserData.pipe(take(1)).subscribe(val=>{
      //   console.log("my user",val)
      //   switch(val!.role){
      //     case "PATIENT":
      //       this.route.navigate(['account'])
      //       break
      //      case "ADMIN": 
      //      this.route.navigate(['admin'])
      //      break;
      //      case "DOCTOR":
      //       this.route.navigate(['home'])
      
      //   }
      // })
  
      
    }

    
  })
 
 

  

}



ngOnDestroy(): void {
  
}

}
