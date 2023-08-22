import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapAmericaComponent } from './cap-america/cap-america.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent },
  {path: '', component: HomeComponent},
  {path: 'About', component: AboutComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'contactus', component: ContactUsComponent },
  { path: '**', redirectTo: '/Home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
