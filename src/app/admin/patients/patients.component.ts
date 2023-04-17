import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  constructor(private patientService : PatientService) { }

  ngOnInit(): void {
    
  }



}
