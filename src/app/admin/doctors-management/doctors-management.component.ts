import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctors-management',
  templateUrl: './doctors-management.component.html',
  styleUrls: ['./doctors-management.component.css']
})
export class DoctorsManagementComponent implements OnInit , DoCheck {
segments? : string[];
  constructor(private router : Router) { }
  getCurrentUrl(){
    this.segments = this.router.url.split("/").filter(segment=> segment != '')
  }
  ngDoCheck() {
    this.getCurrentUrl()
  }

  ngOnInit(): void {
    this.getCurrentUrl()
    
    
  }

}
