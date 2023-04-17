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

  doctorsList: Doctor[]= []
  myImage?: string;

  constructor(private docService : DoctorsService) { }

  ngOnInit(): void {

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
