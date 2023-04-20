import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Patient } from '../models/patient.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild("form") form! : ElementRef;
  selectedFiles?: FileList;
  currentFile?:File;
  constructor(private auth :AuthService) { }

  ngOnInit(): void {
  }

  

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  signup(data:Patient){
    console.log(data.password)
    if(this.selectedFiles ){
      const file: File | null = this.selectedFiles.item(0);
      
      if(file)
      {
        this.currentFile=file;
        this.auth.signup(data , this.currentFile).subscribe(res=>{
          console.log(res) 

        })
        
      }
   
    }
    
   
    
  }

}
