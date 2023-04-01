import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'' , component:MainComponent},
  {path:'signup', component:SignUpComponent },
  {path:'signin', component:SigninComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
