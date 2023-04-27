import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, map, Observable, pipe, take } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  webview =true;
  loaded = false;
  doctorsList: Doctor[]= []
  myImage?: string;

  constructor(private docService : DoctorsService, private responsive : BreakpointObserver) { }

  //this function detecte the size of the screen
  makeResponsive(){
    this.responsive.observe([Breakpoints.Small , Breakpoints.XSmall ]).subscribe(result=>{
      this.webview= true
      console.log(result)
        if(result.matches){
          this.webview= false;
  
        }
      })
  }
    

  ngOnInit(): void {
    this.loaded=false
    this.makeResponsive();
  this.docService.getDoctorsList().pipe(take(1)).subscribe(response=>{
    this.doctorsList= response;
    
    
  })
// this.assaignDocPic()
  
  
  }



}
