import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecialityComponent } from './admin/add-speciality/add-speciality.component';
import { AdminComponent } from './admin/admin.component';
import { AppointementsComponent } from './admin/appointements/appointements.component';
import { AddDoctorComponent } from './admin/doctors-management/add-doctor/add-doctor.component';
import { DoctorsManagementComponent } from './admin/doctors-management/doctors-management.component';
import { DoctosListComponent } from './admin/doctors-management/doctos-list/doctos-list.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { DoctorComponent } from './doctor/doctor.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'' ,redirectTo: 'home' ,pathMatch:'full'},
  {path:'home' , component: MainComponent},
  {path:'signup', component:SignUpComponent },
  {path:'signin', component:SigninComponent},
  {path:'doctors-list' , component:DoctorComponent},
  {path:'admin' , component :AdminComponent, children:[
    {path:'doctors' , component:DoctorsManagementComponent, children:[
      {path:'doctors-list', component:DoctosListComponent},
      {path:'add-doctor', component:AddDoctorComponent},
      {path:'add-speciality', component:AddSpecialityComponent}
    ]},
    {path: 'patients' , component: PatientsComponent},
    {path: 'appointements' , component: AppointementsComponent}

  ]

  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
