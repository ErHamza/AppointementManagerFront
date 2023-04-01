import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars=faBars;
  sideBar:Boolean=false;

  show(){
    this.sideBar=!this.sideBar
    console.log(this.sideBar)
  }

  closeSideBare(){
    this.sideBar=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
