


import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Rdv } from 'src/app/models/rdv.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-my-appointements',
  templateUrl: './my-appointements.component.html',
  styleUrls: ['./my-appointements.component.css']
})
export class MyAppointementsComponent implements OnInit {
  dataSource! : MatTableDataSource<Rdv>;
  appointementList :Array<Rdv> =[]
  displayedColumns: string[] = ['Appointement Id', 'Date', 'Doctor'];
  constructor(private _patientService: PatientService,
    ) { }
getPatientAppointements(){
  this._patientService.getMyAppointementList().subscribe(res=>{
    this.appointementList = res;
    console.log("Resss",res)
    this.dataSource = new MatTableDataSource(this.appointementList);
  }
  )
}

  ngOnInit(): void {
    this.getPatientAppointements();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase(); 
    }
  }

}
