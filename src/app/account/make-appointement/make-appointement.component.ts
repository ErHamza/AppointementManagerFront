import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { Speciality } from 'src/app/models/speciality.model';
import { ManageDoctorsService } from 'src/app/services/manage-doctors.service';

@Component({
  selector: 'app-make-appointement',
  templateUrl: './make-appointement.component.html',
  styleUrls: ['./make-appointement.component.css']
})
export class MakeAppointementComponent implements OnInit {
// this for sending the selected speciality ti the componenet of docs
  selectedSpec! : Speciality;
//sent by the doctors compoenent
  selectedDoctor? : Doctor;

  stepperOrientation?: Observable<StepperOrientation> ;
  myForm? : FormGroup;
  specialities! : Speciality[];
  //when enabled by the click the user will seee the compoenent of docs
  doctorsC : boolean= false;
  formGroup!:FormGroup;
  constructor(private _formBuilder: FormBuilder,private breakpointObserver: BreakpointObserver, 
    private manageDoc : ManageDoctorsService) { 
   
  }
  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  //function to detecte the screen size and ajust the stepper orientation 
  stepperOrientationFunction(){
    this.stepperOrientation = this.breakpointObserver
    .observe([Breakpoints.Web, Breakpoints.Medium])
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.manageDoc.SpecialityList().subscribe(res=>{
      this.specialities = res;
    });

  }
  
  ngOnInit(): void {
    this.stepperOrientationFunction();
  
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

  onSend(doc:Doctor){
    this.selectedDoctor= doc
    this.doctorsC=false

  }

  onSubmit(){
    console.log(this.formGroup)

  }

}
