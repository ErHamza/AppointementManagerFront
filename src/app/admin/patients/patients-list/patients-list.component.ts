import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  PATIENTS! : Patient[];
  dataSource!: MatTableDataSource<Patient>;
  constructor(private patientService : PatientService) { }

  ngOnInit(): void {

    this.patientService.patientList().subscribe(res=>{
      this.PATIENTS = res
      this.dataSource = new MatTableDataSource(this.PATIENTS);
    })
  }

  displayedColumns: string[] = ['user_id', 'username', 'email', 'phone_number'];
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

}
