import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Rdv } from '../models/rdv.model';
import { Specliaity } from '../models/speciality.model';

@Injectable({
  providedIn: 'root'
})
export class ManageDoctorsService {

  server:string="http://127.0.0.1:8085";

  constructor(private http:HttpClient) { }
  SpecialityList(){
    return this.http.get<Specliaity[]>(this.server + "/api/v0/admin/speciality/list")
  }

  addSpeciality(data:{speciality_name : string}){
    return this.http.post(this.server + "/api/v0/admin/speciality/add" , data)
  }

addDoctor(doctor : Doctor , image:File){
  
      const formData = new FormData();
      doctor.image_name = image.name
      const doctorObj = Object.assign({}, doctor);
  Object.keys(doctorObj).forEach(key => {
    if (key.startsWith('_')) {
      delete doctorObj[key];
      doctorObj[key.substr(1)] = doctor[key];
    }
  });
  delete doctorObj.token;
      console.log(doctorObj)
      
      
      formData.append('file', image);
      formData.append('doctor', JSON.stringify(doctorObj));
      
       return this.http.post(this.server+"/api/v0/admin/doctors/register", formData)

      }






}
