import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from "./data-binding/data-binding.component";
import { AboutUsComponent } from "./about-us/about-us.component";
const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'data-binding', component : DataBindingComponent},
  {path : 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
