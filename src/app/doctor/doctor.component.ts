import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorsService } from '../services/doctors.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctorsList: Doctor[]= []

  constructor(private docService : DoctorsService) { }

  ngOnInit(): void {

  this.docService.allDoctorsList().subscribe(response=>{
    this.doctorsList= response;
    console.log(this.doctorsList  )
    
  })
  }

}
