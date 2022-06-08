import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';


import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { CrearCapacitacionComponent } from './components/crear-capacitacion/crear-capacitacion.component';
import { FormsModule} from '@angular/forms';
import { ListaCapacitacionComponent } from './components/lista-capacitacion/lista-capacitacion.component';
import { ActualizarCapacitacionComponent } from './components/actualizar-capacitacion/actualizar-capacitacion.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
     BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HysComponent,
    FooterComponent,
    ListaPersonasComponent,
    CrearCapacitacionComponent,
    LoginComponent,
    ListaCapacitacionComponent,
       ActualizarCapacitacionComponent  
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({ })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
