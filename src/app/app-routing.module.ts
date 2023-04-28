import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { MakeAppointementComponent } from './account/make-appointement/make-appointement.component';
import { MyAppointementsComponent } from './account/my-appointements/my-appointements.component';

import { AdminComponent } from './admin/admin.component';
import { AppointementsComponent } from './admin/appointements/appointements.component';
import { AddDoctorComponent } from './admin/doctors-management/add-doctor/add-doctor.component';
import { AddSpecialityComponent } from './admin/doctors-management/add-speciality/add-speciality.component';
import { DoctorsManagementComponent } from './admin/doctors-management/doctors-management.component';
import { DoctosListComponent } from './admin/doctors-management/doctos-list/doctos-list.component';
import { PatientsListComponent } from './admin/patients/patients-list/patients-list.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { DocotrAppointementsComponent } from './doctor-comp/docotr-appointements/docotr-appointements.component';
import { DoctorCompComponent } from './doctor-comp/doctor-comp.component';
import { MyPatientsComponent } from './doctor-comp/my-patients/my-patients.component';


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
    {path:'', redirectTo:'doctors' , pathMatch:'full'},
    {path:'doctors' , component:DoctorsManagementComponent, children:[
      {path: '', redirectTo: 'doctors-list', pathMatch: 'full'},
      {path:'doctors-list', component:DoctosListComponent},
      {path:'add-doctor', component:AddDoctorComponent},
      {path:'add-speciality', component:AddSpecialityComponent}
    ]},
    {path: 'patients' , component: PatientsComponent, children:[
      {path:'patients-list', component:PatientsListComponent}
    ]},
    {path: 'appointements' , component: AppointementsComponent}

  ]

  },
  {path:"account"  , component:AccountComponent, children:[
    {path: '', redirectTo: 'my-appointements', pathMatch: 'full'},
    {path:"new-appointement", component:MakeAppointementComponent},
    {path: 'my-appointements', component : MyAppointementsComponent}
  ]},
  {path:'doctor', component : DoctorCompComponent, children:[

    {path: "", redirectTo: "myappointements" , pathMatch:'full'},
    {path: "mypatients", component : MyPatientsComponent},
    {path: "myappointements", component : DocotrAppointementsComponent},
    

  ]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
