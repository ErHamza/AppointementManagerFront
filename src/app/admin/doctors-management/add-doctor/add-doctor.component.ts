import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Doctor } from 'src/app/models/doctor.model';
import { Speciality } from 'src/app/models/speciality.model';
import { ManageDoctorsService } from 'src/app/services/manage-doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private manageDocors : ManageDoctorsService) { }
specialities! : Speciality[];
selectedFile! : File ;
selectedFiles! : FileList;

  ngOnInit(): void {
    this.manageDocors.SpecialityList().pipe(take(1)).subscribe(
      res=>{
        this.specialities= res
        
      }
    );
  }

  // if(this.selectedFiles ){
  //   const file: File | null = this.selectedFiles.item(0);
    
  //   if(file)
  //   {
  //     this.currentFile=file;
  //     this.auth.signup(data , this.currentFile).subscribe(res=>{
  //       console.log(res) 

  //     })
  onSubmit(){
    if(this.selectedFiles){
      
      const form = this.doctorForm.value;
      const selectedSpeciality = this.specialities.find(s => s.speciality_name === form.speciality);
      console.log("this is my form ",form)
        const file: File | null = this.selectedFiles.item(0);
      
      
      if(this.doctorForm){
        const doctor: Doctor= new Doctor(1 , this.doctorForm.value.name || '',
        this.doctorForm.value.password || '',
        this.doctorForm.value.email || '',
        this.doctorForm.value.phone_number || "" ,
        "DOCTOR",
        selectedSpeciality ||this.specialities[0],
        file?.name || '',
        ''
      );
      console.log(file)
      
      if(file){
        console.log(file)
        this.manageDocors.addDoctor(doctor, file).subscribe()
      }
     
    }
            
          
    
      

    }
   
 
    

  }


  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  doctorForm = new FormGroup({
    name: new FormControl('', [Validators.required , Validators.minLength(4)]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone_number: new FormControl('' , [Validators.required]),
    speciality: new FormControl('',[Validators.required]),
    image: new FormControl('', [Validators.required]),
  });








  
}
