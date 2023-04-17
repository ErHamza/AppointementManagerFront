import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Rdv } from '../models/rdv.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  server:string="http://127.0.0.1:8085";
  
  constructor(private auth : AuthService, private http : HttpClient) { }

  allDoctorsList(){
    return this.http.get<Doctor[]>(this.server+"/api/v0/manage/doctors-list")

  }

  DoctorsRdv(){
    return this.http.get<Rdv[]>(this.server+'/api/v0/doctor/rdv/list')
  }

  //Allow doctors to Cancel the Appointement
  cancelRdvByDoctor(rdv_id:number){}

  postponeRdvByDoctor(){}
  
  addConsultation(rdv :Rdv, diagnostic : string){
    const formData = new FormData();
    formData.append('rdv_id', rdv.rdv_id.toString());
    formData.append('diagnostic', diagnostic)
    return this.http.post(this.server + '/api/v0/consultation/add', formData)

  }
  

  getDoctorPicture():Observable<any>{
 
        
        
    const httpsheader= new HttpHeaders({
      
      'Accept': 'image/jpg'
      
  
    })
    // const headers = new HttpHeaders({ 'Content-Type': 'application/octet-stream' });
    return this.http.get(this.server + "/auth/user-image", {responseType:'blob',headers: httpsheader})
  }

  
}
