import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { HttpClientModule } from '@angular/common/http';
import { TruncateTextPipe } from './truncate-text.pipe';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { TermsComponent } from './components/terms/terms.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './components/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProfessionalsComponent,
    TruncateTextPipe,
    LogInComponent,
    RegisterComponent,
    TermsComponent,
    PoliciesComponent,
    AboutusComponent,
    BlogsComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
