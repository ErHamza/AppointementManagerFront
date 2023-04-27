import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { Speciality } from 'src/app/models/speciality.model';
import { DoctorsService } from 'src/app/services/doctors.service';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit, OnChanges,OnDestroy {
  webview = true;
  @Input() speciality! : Speciality;
  @Output() event = new EventEmitter<Doctor>();
  doctorsList? :Doctor[];
  $endSub = new Subject<void>();

  makeResponsive(){
    this.responsive.observe([Breakpoints.Small , Breakpoints.XSmall ]).subscribe(result=>{
      this.webview= true
        if(result.matches){
          this.webview= false;
        }
      })
  }

  constructor(
     private _doctorsService : DoctorsService
     ,private responsive : BreakpointObserver,
     ) { }
  ngOnDestroy(): void {
    this.$endSub.next()
  }


   getDoctorsList(){
    this._doctorsService.doctorsListBySpeciality(this.speciality.speciality_id.toString()).pipe(takeUntil(this.$endSub)).subscribe(res=>{
      this.doctorsList= res
      })
   }  
  ngOnChanges(changes: SimpleChanges): void {
    this.getDoctorsList()
    
    
  }


  ngOnInit(): void {
    this.getDoctorsList()
    
  }

//when select the doc
select(doc : Doctor){
  this.event.emit(doc);

}

  

}
