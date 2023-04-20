import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Breakpoints } from '@angular/cdk/layout'; 
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommunService } from '../services/commun.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { User } from '../models/user.model';






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnChanges{
  user? : User | null;
  
  isMobile$?: boolean;
  isLaptop$?: boolean;


  faBars=faBars;
  poweroff=faPowerOff;
  
  sideBar:boolean=false;

  show(){
    this.sideBar=!this.sideBar
      this.commun.showSideBar.next(this.sideBar)
  }

  go_to_home(){
    this.router.navigate(['home'])

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
  this.responsive.observe([ Breakpoints.Small] ).subscribe(res=>{
    if(res.matches){
      this.isLaptop$= false;
      console.log("web")
      this.isMobile$= true;
    }
    
  });

}

  ngOnInit(): void {
this.testScreen()
this.auth.UserData.subscribe(myuser=>{
  this.user=myuser

 })
 console.log(this.user)
  
}

  logout(){
    this.auth.logout()
  }

    
    
  }


  

  

  

