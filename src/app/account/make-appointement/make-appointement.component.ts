import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Speciality } from 'src/app/models/speciality.model';
import { ManageDoctorsService } from 'src/app/services/manage-doctors.service';

@Component({
  selector: 'app-make-appointement',
  templateUrl: './make-appointement.component.html',
  styleUrls: ['./make-appointement.component.css']
})
export class MakeAppointementComponent implements OnInit {

  selectedSpec! : Speciality;

   stepperOrientation?: Observable<StepperOrientation> ;
  myForm? : FormGroup;
  specialities! : Speciality[];
  doctorsC : boolean= false;
  formGroup!:FormGroup;
  constructor(private _formBuilder: FormBuilder,private breakpointObserver: BreakpointObserver, 
    private manageDoc : ManageDoctorsService) { 
   
  }

  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
  
  ngOnInit(): void {
    this.stepperOrientation = this.breakpointObserver
    .observe([Breakpoints.Web, Breakpoints.Medium])
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.manageDoc.SpecialityList().subscribe(res=>{
      this.specialities = res;
    });

    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          speciality: ['', Validators.required],
          // lastNameFormCtrl: ['', Validators.required],
        }),
        this._formBuilder.group({
          date: ['']
        }),
        this._formBuilder.group({

        })
      ])
    });
  }

    
  

  showDocs(){
    this.doctorsC = true;
  }

  onSubmit(){
    console.log(this.formGroup)

  }

}
