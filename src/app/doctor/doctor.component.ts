import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { pipe, take } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  webview =true;

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
    this.makeResponsive();

  this.docService.allDoctorsList().pipe(take(1)).subscribe(response=>{
    this.doctorsList= response;
    console.log(this.doctorsList  )
   
    
  })
  
     this.docService.getDoctorPicture().pipe(take(1)).subscribe( (data: Blob)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
    
      reader.onloadend = () => {
        
        this.myImage = reader.result as string;
        
      };
      
    })
  }

}
