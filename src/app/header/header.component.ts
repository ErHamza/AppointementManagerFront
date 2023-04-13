import { Component, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Breakpoints } from '@angular/cdk/layout'; 
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommunService } from '../services/commun.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myImage!: any;


  faBars=faBars;
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

  
  ngOnInit(): void {
    // this.responsive.observe([Breakpoints.Small
    // , Breakpoints.Web
    // ]).subscribe(result=>{
    //   console.log(result)
      
    // })

    

    
    
  }


  

  

  
}
