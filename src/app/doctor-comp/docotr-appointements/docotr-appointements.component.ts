import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Rdv } from 'src/app/models/rdv.model';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-docotr-appointements',
  templateUrl: './docotr-appointements.component.html',
  styleUrls: ['./docotr-appointements.component.css']
})
export class DocotrAppointementsComponent implements OnInit {
  faGear= faGear;
  dataSource! : MatTableDataSource<Rdv>;
  appointementList :Array<Rdv> =[]
  displayedColumns: string[] = ['Appointement Id', 'Date', 'Patient', 'Action'];
  consultationWindow=false;
  selectedRdv? : Rdv;


  constructor(private _doctorService : DoctorsService) { }

  getDoctorAppointements(){
    this._doctorService.doctorAppoinentements().subscribe(res=>{
      this.appointementList = res;
      console.log(res)
      
      // this.appointementList.forEach(element=>{
      //   element.date_rdv = new Date(element.date_rdv)
      // })
      
      this.dataSource = new MatTableDataSource(this.appointementList);
    }
    )
  }

  ngOnInit(): void {
    this.getDoctorAppointements()
  }

addConsultation(appointement :Rdv){

  this.consultationWindow=!this.consultationWindow
  this.selectedRdv = appointement;
  
}

showUserDetails(){

}



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase(); 
    }
  }
}
