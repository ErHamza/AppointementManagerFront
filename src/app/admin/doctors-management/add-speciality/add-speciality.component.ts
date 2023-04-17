import { Component, OnInit } from '@angular/core';
import { ManageDoctorsService } from 'src/app/services/manage-doctors.service';

@Component({
  selector: 'app-add-speciality',
  templateUrl: './add-speciality.component.html',
  styleUrls: ['./add-speciality.component.css']
})
export class AddSpecialityComponent implements OnInit {

  constructor(private manageDoctors : ManageDoctorsService) { }

  addSpeciality(data : any){
    this.manageDoctors.addSpeciality({speciality_name: data.name}).subscribe(res=>{
      console.log(res)
    })
  }


  ngOnInit(): void {
  }

}
