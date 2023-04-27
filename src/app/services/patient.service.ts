import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { Patient } from '../models/patient.model';
import { Rdv } from '../models/rdv.model';
import { Speciality } from '../models/speciality.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  server:string="http://127.0.0.1:8085";

  constructor(private http: HttpClient) { }
  patientList(){
    return this.http.get<Patient[]>(this.server+"/api/v0/admin/patients-list")
  }


  makeAppointement(data: {timestamp: number , doctor_id?: number | null}){
    
    return this.http.post(this.server + "/api/v0/rdv/add", data)
  }

  getMyAppointementList(){
    return this.http.get<Rdv[]>(this.server + "/api/v0/rdv/list")
  }
}
