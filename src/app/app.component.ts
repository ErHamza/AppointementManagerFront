import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommunService } from './services/commun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  title = 'Rdv-front';
  sideBar:boolean= false;
  constructor(private commun:CommunService){

  }
  ngOnInit(): void {
    this.commun.showSideBar.subscribe(result=>{
      this.sideBar=result;
      
      
    })
  }
  ngOnChanges() {

  }

}
