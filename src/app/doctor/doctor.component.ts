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


  getDoctorPicture(id : number) {
    
    this.docService.getDoctorPicture(id).pipe(take(1)).subscribe( (data: Blob)=>{
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onloadend = () => {
        return reader.result as string;
        
      };
     
      
    })
  }

  // getDoctorPicture(id: number): Observable<string> {
  //   return from(this.docService.getDoctorPicture(id)).pipe(
  //     map((data: Blob) => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(data);
  //       reader.onloadend = () => {
  //         return reader.result as string;
  //       };
  //       return ''; // Return an empty string to avoid returning undefined
  //     })
  //   );
  // }
  
  

  

  ngOnInit(): void {
    this.loaded=false
    this.makeResponsive();
  this.docService.allDoctorsList().pipe(take(1)).subscribe(response=>{
    this.doctorsList= response;
    
  })
// this.assaignDocPic()
  
  
  }



}
