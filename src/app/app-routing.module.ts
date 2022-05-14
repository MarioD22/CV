import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { CrearCapacitacionComponent } from './components/crear-capacitacion/crear-capacitacion.component';


const routes: Routes = [
  {path:'lista-personas', component: ListaPersonasComponent},
  {path:'',redirectTo:'lista-personas', pathMatch:'full' },
  {path:'crar-capacitacion', component: CrearCapacitacionComponent}
  
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})

export class AppRoutingModule { }
