import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TileStyler } from '@angular/material/grid-list/tile-styler';
import { take } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { Speciality } from 'src/app/models/speciality.model';
import { DoctorsService } from 'src/app/services/doctors.service';
import { ManageDoctorsService } from 'src/app/services/manage-doctors.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit, OnChanges {
  myImage?: string;
  webview = true;
  @Input() speciality! : Speciality;
  @Output() event = new EventEmitter<Doctor>();
  doctorsList? :Doctor[];

  makeResponsive(){
    this.responsive.observe([Breakpoints.Small , Breakpoints.XSmall ]).subscribe(result=>{
      this.webview= true
      console.log(result)
        if(result.matches){
          this.webview= false;
  
        }
      })
  }

  constructor(private _managementDoc : ManageDoctorsService,
     private _doctorsService : DoctorsService
     ,private responsive : BreakpointObserver,
     ) { }


   getDoctorsList(){
    this._managementDoc.doctorsListBySpeciality(this.speciality.speciality_id.toString()).subscribe(res=>{
      this.doctorsList= res
      console.log(res)})
   }  
  ngOnChanges(changes: SimpleChanges): void {
    this.getDoctorsList()
    this.getDocsPictures()
    
  }


  ngOnInit(): void {
    this.getDoctorsList()
    this.getDocsPictures()
    console.log(this.speciality)


  }

// this methode to get the pictures of docs
getDocsPictures(){
  this._doctorsService.getDoctorPicture().pipe(take(1)).subscribe( (data: Blob)=>{
    const reader = new FileReader();
    reader.readAsDataURL(data);
  
    reader.onloadend = () => {
      
      this.myImage = reader.result as string;
      
    };
    
  })
}

select(doc : Doctor){
  this.event.emit(doc);

}

  

}
