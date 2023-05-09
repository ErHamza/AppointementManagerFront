import { Component, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faBars , faCaretDown, faCaretUp  } from '@fortawesome/free-solid-svg-icons';
import { Breakpoints } from '@angular/cdk/layout'; 
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommunService } from '../services/commun.service';
import {Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faPowerOff , faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/user.model';
import { take } from 'rxjs';







@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnChanges , OnDestroy{
  
  user? : User | null;
  OptionsButton=false;
  isMobile$?: boolean;
  isLaptop$?: boolean;
  faBars=faBars;
  faCaretDown=faCaretDown;
  poweroff=faPowerOff;
  faArrowDown= faArrowDown;
  faCaretUp=faCaretUp;
  sideBar:boolean=false;
  userPicture?:string;
  

  show(){
    this.sideBar=!this.sideBar
      this.commun.showSideBar.next(this.sideBar)
  }

  go_to_home(){
    this.router.navigate(['home'])

  }


loadUserPicture() {
  this.auth.getUserPicture().pipe(take(1)).subscribe(res=> {
    const reader = new FileReader();
    reader.readAsDataURL(res);
    reader.onloadend = () => {
      const obj= reader.result as string;
      this.userPicture=obj
      
                            }
                          })
                        
                        }


  
  constructor(private responsive: BreakpointObserver, private commun: CommunService
    ,private router : Router, private auth : AuthService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.testScreen()
    
  }

  
testScreen(){
  this.responsive.observe([Breakpoints.Medium, Breakpoints.Web , Breakpoints.Large
  ,Breakpoints.XLarge]).subscribe(
    res=>{
      if(res.matches){

        
      this.isLaptop$= true;
      this.isMobile$= false;
      }
    }
  );

// to make the screen responsive 
this.responsive.observe([ Breakpoints.Small] ).subscribe(res=>{
    if(res.matches){
      this.isLaptop$= false;
      
      this.isMobile$= true;
    }
    
  });

}



loadUser(){
  this.auth.UserData.subscribe(myuser=>{
    this.user = myuser
    
    
    if(myuser?.email)
    this.loadUserPicture()
    })
}
ngOnInit(): void {
  this.testScreen()
  this.loadUser()
  
 
 
  
}

  logout(){
    this.auth.logout()
    this.router.navigate(['signin'])
  }

    
    


  ngOnDestroy(): void {
  //  this.userPicture= "";
  }



  }


  

  

  

