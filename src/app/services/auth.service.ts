import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import jwt_decode from 'jwt-decode';
import { LoginForm } from '../models/loginForm.model';
import { Patient } from '../models/patient.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  UserData= new BehaviorSubject<User|null>(null);
  server:string="http://127.0.0.1:8085";
  expireTime :any;
   constructor(private http: HttpClient, private route : Router) { }

signup(patient: Patient, image :any ){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };
  
  patient.image_name =image.name
  const formData = new FormData();
  formData.append('file', image);
  formData.append('patient', JSON.stringify(patient));
  
  
  
  return this.http.post<{token: string}>(this.server+'/auth/register',  formData).
    pipe(tap(response=>{
   this.HandaleAuth(response.token)              
                }));

}   

login(data: LoginForm)
  {
      
      
      
        return this.http.post<  {token : string}>(this.server+'/auth/login',
         data
                  ).pipe(tap(response=>{
                      
                                       
                    
                    this.HandaleAuth(response.token)              
                    
                  }))
    }
  
private HandaleAuth(data :any)
    {
      const tokenInfo:any = jwt_decode(data);
      console.log(tokenInfo)
          const  experation_time =new Date(new Date().getTime() + +tokenInfo?.expTime * 60*1000)
          const user_id = tokenInfo.user_id;
          this.http.get<User>(this.server + '/api/v0/manage/user/'+ user_id,
          {
            headers: new HttpHeaders({

              'Authorization' : 'Bearer '+data
            })
          } 
          ).pipe(
            map(res=>{
                const user:User = res;
                user.token= data
                this.UserData.next(user);
                localStorage.setItem('UserData', JSON.stringify(user));
                switch(user.role){
                  case "PATIENT":
                    this.route.navigate(['account'])
                    break
                   case "ADMIN": 
                   this.route.navigate(['admin'])
                   break;
                   case "DOCTOR":
                    this.route.navigate(['home'])
              
                }
            })
          ).subscribe()
                    
          this.autologout(+tokenInfo.expTime * 60*1000);
          
          
                 
              
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

// post image
test(image: any){
  const fromData = new FormData();
fromData.append('image',image);
return this.http.post(this.server + '/auth/image',fromData)


}


getUserPicture():Observable<any>{
 
  const token = this.UserData.value?.token;
  console.log("token", token)
  const httpsheader= new HttpHeaders({
    
    'Accept': 'image/jpg'
    

  })
  // const headers = new HttpHeaders({ 'Content-Type': 'application/octet-stream' });
  return this.http.get(this.server + "/auth/user-image", {responseType:'blob',headers: httpsheader})
}





autoLogin(){
        

  const user:User =JSON.parse(localStorage.getItem('UserData') || '{}')
  if (!user){
    
      return;
  }

  
    if (user){
      this.UserData.next(user);
      // const expTime= new Date(user.experation_date).getTime() - new Date().getTime();
     //TODO add expire time logout
     
      //Calling auto logout here deletes the UserData form the localStorage
      // this.autologout(expTime);
      
    }
  }


}



