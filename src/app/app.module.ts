import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the required modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './main/main.component';
import{MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CountUpModule } from 'ngx-countup';
import { FilterComponent } from './doctor/filter/filter.component';
import { IntercepterService } from './services/intercepter.service';

import { AddSpecialityComponent } from './admin/add-speciality/add-speciality.component';
import { DoctorsManagementComponent } from './admin/doctors-management/doctors-management.component';
import { AppointementsComponent } from './admin/appointements/appointements.component';
import { PatientsComponent } from './admin/patients/patients.component';
import { AddDoctorComponent } from './admin/doctors-management/add-doctor/add-doctor.component';
import { DoctosListComponent } from './admin/doctors-management/doctos-list/doctos-list.component';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AdminComponent,
    DoctorComponent,
    FilterComponent,
    
    AddSpecialityComponent,
         DoctorsManagementComponent,
         AppointementsComponent,
         PatientsComponent,
         AddDoctorComponent,
         DoctosListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule, // Register the FormsModule
    ReactiveFormsModule, // Register the ReactiveFormsModule
    HttpClientModule,
     FontAwesomeModule,
     BrowserAnimationsModule,
     MatSlideToggleModule,
     MatFormFieldModule,
     MatInputModule,
     MatButtonModule,
     MatButtonModule,
     MatCardModule,
     MatSidenavModule,
     MatDividerModule,
     MatIconModule,
     CountUpModule,
     MatGridListModule,
     MatTableModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: IntercepterService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
