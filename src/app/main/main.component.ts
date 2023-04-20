import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { fa4 } from '@fortawesome/free-solid-svg-icons';
import { CountUpDirective } from 'ngx-countup';
import { AuthService } from '../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterContentInit , AfterViewInit{

  @ViewChild("count1") ele1! : CountUpDirective;
  @ViewChild("count2") ele2! : CountUpDirective;

  webview= false;
  fa1= fa1;
  fa2= fa2;
  fa3= fa3;
  fa4= fa4;
  myImage!:string;
  

  constructor(private responsive: BreakpointObserver, private elem: ElementRef, private renderer: Renderer2,
    private auth:AuthService, private sanitizer: DomSanitizer) { }
  ngAfterViewInit(): void {
    // this.ele1.animate();
    // this.ele2.animate(); 
  }
  

  ngOnInit(): void {
    
    // this.auth.getUserPicture().subscribe( (data: Blob)=>{
    //   const reader = new FileReader();
    //   reader.readAsDataURL(data);
    
    //   reader.onloadend = () => {
        
    //     this.myImage = reader.result as string;
        
    //   };
      
    // })
   
   
 
    this.responsive.observe([Breakpoints.Small , Breakpoints.XSmall ]).subscribe(result=>{
    this.webview= true
    console.log(result)
      if(result.matches){
        this.webview= false;

      }
    })
  }

  ngAfterContentInit(): void {
      // this.renderer.setStyle(this.elem.nativeElement.ownerDocument.body , 'background', '#F6F8FA')
     
    }


  //animation 
  
  // getImage(){
  //   // const imageService = new ImageService(this.http);
  // return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.myImage));
  // }


}
