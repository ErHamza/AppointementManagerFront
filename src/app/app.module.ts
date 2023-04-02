import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import the required modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CountUpDirective } from './count-up.directive';
import { CountUpModule } from 'ngx-countup';




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
    CountUpDirective
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
     CountUpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
