import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapAmericaComponent } from './cap-america/cap-america.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: 'cap-america', component: CapAmericaComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact-us', component: ContactUsComponent },
  // { path: 'services', component: ServicesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'about', component: CapAmericaComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
