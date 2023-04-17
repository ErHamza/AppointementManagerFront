import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  server:string="http://127.0.0.1:8085";

  constructor(private http: HttpClient) { }
  patientList(){
    return this.http.get<Patient[]>(this.server+"/api/v0/admin/patients-list")
  }
}
