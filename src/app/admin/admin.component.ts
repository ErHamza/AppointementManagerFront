import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { faBars , faCaretDown, faCaretUp  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
user!:User | null;
doctorMenu=false;
patientMenu=false
faCaretUp= faCaretUp;
faCaretDown=faCaretDown;
faBars =faBars ;


  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  
  }

  


}
