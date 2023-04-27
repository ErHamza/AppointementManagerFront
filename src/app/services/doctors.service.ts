import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, Observable, take } from 'rxjs';
import { Doctor } from '../models/doctor.model';
import { Rdv } from '../models/rdv.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  server:string="http://127.0.0.1:8085";
  
  constructor(private auth : AuthService, private http : HttpClient) { }

  getDoctorsList(){
    return this.http.get<Doctor[]>(this.server+"/api/v0/manage/doctors-list").pipe(
      map(res=>{
      // I use the map to fetch the picture of each user
          res.forEach(user=>{
                this.getDoctorPicture(user.user_id!).subscribe((data:any)=>{
                  console.log("live")
                  const reader = new FileReader();
                    reader.readAsDataURL(data);
                    reader.onloadend = () => {
                      const obj= reader.result as string;
                      user.picture=obj }})
          })

          return res
      
      }
    ))
  
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
  

  getDoctorPicture(id: number):Observable<any>{
    const httpsheader= new HttpHeaders({
      'Accept': 'image/jpg',
    })
    // const headers = new HttpHeaders({ 'Content-Type': 'application/octet-stream' });
    return this.http.get(this.server + "/auth/doctor-image/"+id, {responseType:'blob',headers: httpsheader})
  }


  
doctorsListBySpeciality(id : string){
        
  const params =
    {"speciality-id": id}
  

return this.http.get<Doctor[]>(this.server+"/api/v0/manage/doctors-list", {params}).pipe(
  map(res=>{
  // I use the map to fetch the picture of each user
      res.forEach(user=>{
            this.getDoctorPicture(user.user_id!).subscribe((data:any)=>{
              
              const reader = new FileReader();
                reader.readAsDataURL(data);
                reader.onloadend = () => {
                  const obj= reader.result as string;
                  user.picture=obj }})
      })

      return res
  
  }
))

}



  
}
