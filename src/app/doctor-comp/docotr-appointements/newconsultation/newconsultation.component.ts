import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
import { Patient } from 'src/app/models/patient.model';
import { Rdv } from 'src/app/models/rdv.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-newconsultation',
  templateUrl: './newconsultation.component.html',
  styleUrls: ['./newconsultation.component.css']
})
export class NewconsultationComponent implements OnInit {
  @Input() rdv? : Rdv;
myImageUrl?: string;
  patient? : Patient ;
  $destroy?  = new Subject<void>();
  @Output() created = new EventEmitter<void>(); 
  
  constructor(private _doctorService : DoctorsService,
    private _formBuilder : FormBuilder) { }

formGroub : FormGroup = this._formBuilder.group({
  consulation : ['your consultation']
})

  addConsultation(){
    // this._doctorService.addConsultation();
  }

  getPatientInfo(){
    this._doctorService.getPatientDetails(this.rdv!.patient).pipe(take(1)).subscribe(res=>{
      this.patient = res
      
    })
  }

getPatientImage(){
  this._doctorService.getPatientImage(this.rdv?.patient.user_id!).pipe(take(1)).subscribe(res=>{
    console.log(res)
    const reader = new FileReader();
                reader.readAsDataURL(res);
                reader.onloadend = () => {
                  this.myImageUrl= reader.result as string;
                }
  })
}

  ngOnInit(): void {
    this.getPatientInfo()
    this.getPatientImage()
  }

onSubmit(value: any){
  console.log("aa",value.diagnostic)

  this._doctorService.addConsultation(value.diagnostic ,  this.rdv!).subscribe(res=>{
    if(res){
setTimeout(()=>this.created.emit(), 1000)

      

    }
  })
}

}
