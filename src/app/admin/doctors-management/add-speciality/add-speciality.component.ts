import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManageDoctorsService } from 'src/app/services/manage-doctors.service';

@Component({
  selector: 'app-add-speciality',
  templateUrl: './add-speciality.component.html',
  styleUrls: ['./add-speciality.component.css']
})
export class AddSpecialityComponent implements OnInit {
  @ViewChild("data") form? : NgForm

  constructor(private manageDoctors : ManageDoctorsService) { }

  addSpeciality(data : any){
    this.manageDoctors.addSpeciality({speciality_name: data.name}).subscribe(res=>{
      this.form?.reset()
      
    })
  }


  ngOnInit(): void {
  }

}
