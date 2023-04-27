import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable, Subject, take, takeUntil } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { Speciality } from 'src/app/models/speciality.model';
import { ManageDoctorsService } from 'src/app/services/manage-doctors.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-make-appointement',
  templateUrl: './make-appointement.component.html',
  styleUrls: ['./make-appointement.component.css']
})
export class MakeAppointementComponent implements OnInit , OnDestroy {
// this for sending the selected speciality ti the componenet of docs
  selectedSpec! : Speciality;
//sent by the doctors compoenent
  selectedDoctor? : Doctor;
  private destroy$ = new Subject<void>();

  stepperOrientation?: Observable<StepperOrientation> ;
  myForm? : FormGroup;
  specialities! : Speciality[];
  //when enabled by the click the user will seee the compoenent of docs
  doctorsC : boolean= false;
  formGroup!:FormGroup;
  constructor(private _formBuilder: FormBuilder,private breakpointObserver: BreakpointObserver, 
    private manageDoc : ManageDoctorsService, private _patientService : PatientService) { 
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
    const chosen_speciality : Speciality = this.formGroup.value.formArray[0].speciality;
    const chosen_date : Date = this.formGroup.value.formArray[1].date;
    
    console.log("my date", chosen_date.getTime())
    console.log("my date", this.selectedDoctor?.user_id)
  
    this._patientService.makeAppointement
    ({timestamp: chosen_date.getTime() , doctor_id : this.selectedDoctor?.user_id}).pipe
    (takeUntil(this.destroy$)).subscribe();
  
    
    // const date = data.date.getTime();
    // this._patientService.makeAppointement()
    

  }



  ngOnDestroy(){
    this.destroy$.next();
   
  }

}
