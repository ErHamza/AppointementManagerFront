import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Patient } from 'src/app/models/patient.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-my-patients',
  templateUrl: './my-patients.component.html',
  styleUrls: ['./my-patients.component.css']
})
export class MyPatientsComponent implements OnInit {
  displayedColumns: string[] = ['user_id', 'username', 'email', 'phone_number'];

  PATIENTS! : Patient[];
  dataSource!: MatTableDataSource<Patient>;
  

getPatients(){
  this._doctorService.doctorConsultations().subscribe(res=>{
    this.PATIENTS = res
    console.log(res)
    this.dataSource = new MatTableDataSource(this.PATIENTS);
  })
}

  constructor(private _doctorService : DoctorsService) { }

  ngOnInit(): void {
    this.getPatients()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

}
