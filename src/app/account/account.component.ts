import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Speciality } from '../models/speciality.model';
import { ManageDoctorsService } from '../services/manage-doctors.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  stepperOrientation?: Observable<StepperOrientation> ;
  myForm? : FormGroup;
  specialities! : Speciality[];
  doctorsC : boolean= false;
  constructor(private _formBuilder: FormBuilder,private breakpointObserver: BreakpointObserver, 
    private manageDoc : ManageDoctorsService) { 
   
  }

  form= this._formBuilder.group({
    date : ['',Validators.required],
    speciality : ['', Validators.required]
  })
  
  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
    .observe([Breakpoints.Web, Breakpoints.Medium])
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.manageDoc.SpecialityList().subscribe(res=>{
      this.specialities = res;
    })
  }

  showDocs(){
    this.doctorsC = true;
  }

}
