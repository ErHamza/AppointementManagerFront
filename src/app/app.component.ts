import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CommunService } from './services/commun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'Rdv-front';
  sideBar:boolean= false;
  constructor(private commun:CommunService, private auth : AuthService){

  }
  ngOnInit(): void {
    this.auth.autoLogin();

    this.commun.showSideBar.subscribe(result=>{
      this.sideBar=result;
      
      
    })
  }
  ngOnChanges() {

  }

  hideSideBar(){
    if(this.sideBar){
      this.sideBar=false;
    }
  }

}
