import { Component, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Breakpoints } from '@angular/cdk/layout'; 
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommunService } from '../services/commun.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   

  faBars=faBars;
  sideBar:boolean=false;

  show(){
    this.sideBar=!this.sideBar
      this.commun.showSideBar.next(this.sideBar)
  }

  
  constructor(private responsive: BreakpointObserver, private commun: CommunService) { }

  
  ngOnInit(): void {
    // this.responsive.observe([Breakpoints.Small
    // , Breakpoints.Web
    // ]).subscribe(result=>{
    //   console.log(result)
      
    // })
  }
  

  
}
