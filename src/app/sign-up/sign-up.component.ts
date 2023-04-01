import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Patient } from '../models/patient.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth :AuthService) { }

  ngOnInit(): void {
  }

  signup(data:Patient){
    console.log(data)
    this.auth.signup(data).subscribe();    
    console.log(this.auth.UserData.subscribe())
  }

}
