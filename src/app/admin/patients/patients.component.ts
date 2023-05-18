import { Component, DoCheck, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient.model';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit , DoCheck {

  constructor(private patientService : PatientService , private router : Router) { }
  ngDoCheck() {
    this.getCurrentUrl()
    
  }
  segments? : string[];
  
  getCurrentUrl(){
    this.segments = this.router.url.split("/").filter(segment=> segment != '')
  }

  ngOnInit(): void {
    this.getCurrentUrl()
    
  }



}
