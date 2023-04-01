import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../models/user.model';
import jwt_decode from 'jwt-decode';
import { LoginForm } from '../models/loginForm.model';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData= new BehaviorSubject<User|null>(null);
  server:string="http://127.0.0.1:8080";
  expireTime :any;
   constructor(private http: HttpClient) { }

signup(data: Patient){
  return this.http.post<{token: string}>(this.server+'/auth/register', data).
    pipe(tap(response=>{
   const tokenInfo = jwt_decode(response.token);                    
   this.HandaleAuth(tokenInfo)              
                }));

}   

  login(data: LoginForm)
  {
      const logindata = {username: data.password, password:data.password}
    
        return this.http.post<  {token : string}>(this.server+'/auth/login',
                logindata
                  ).pipe(tap(response=>{
                      console.log("data w no decode ", response)
                     const tokenInfo = jwt_decode(response.token);                    
                    
                    this.HandaleAuth(tokenInfo)              
                    
                  }))
    }
  
   private HandaleAuth(tokenInfo :any)
    {
          const  experation_time =new Date(new Date().getTime() + +tokenInfo.expTime * 60*1000)
          const user_id = tokenInfo.user_id;
          this.http.get<User>(this.server + '/api/v0/manage/user/'+ user_id)
          this.UserData.next(tokenInfo);
                 this.autologout(+tokenInfo.expTime * 60*1000);
                localStorage.setItem('UserData', JSON.stringify(tokenInfo.data));
                 
              
     }  



autologout(experationTime:number){
  
  this.expireTime=setTimeout(()=>{

    this.logout();
    

  },experationTime)

}


logout(){
    
  this.UserData.next(null);
  localStorage.removeItem('UserData');
  // localStorage.clear();
  if(this.expireTime){
    clearTimeout(this.expireTime);
  }
  this.expireTime=null; 
}


findUserById(){
  return this.http.get<User>(this.server  )
}





}