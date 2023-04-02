import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterContentInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { fa1 } from '@fortawesome/free-solid-svg-icons';
import { fa2 } from '@fortawesome/free-solid-svg-icons';
import { fa3 } from '@fortawesome/free-solid-svg-icons';
import { fa4 } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterContentInit {
  webview= false;
  fa1= fa1;
  fa2= fa2;
  fa3= fa3;
  fa4= fa4;

  constructor(private responsive: BreakpointObserver, private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.responsive.observe([Breakpoints.Web ]).subscribe(result=>{
      this.webview= false
      if(result.matches){
        this.webview= true;

      }
    })
  }

  ngAfterContentInit(): void {
      this.renderer.setStyle(this.elem.nativeElement.ownerDocument.body , 'background', '#F6F8FA')
  }


  //animation 
  



}
