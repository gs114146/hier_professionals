import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { TermsComponent } from './components/terms/terms.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
	{path:'', component: HomeComponent},
	{path:'home', component: HomeComponent},
	{path:'professionals', component: ProfessionalsComponent},
	{path:'login', component: LogInComponent},
	{path:'register', component: RegisterComponent},
	{path:'terms', component: TermsComponent},
	{path:'policies', component: PoliciesComponent},
	{path:'aboutus', component: AboutusComponent},
	{path:'blog', component: BlogsComponent},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
