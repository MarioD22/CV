import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';
import { CrearCapacitacionComponent } from './components/crear-capacitacion/crear-capacitacion.component';
import { ListaCapacitacionComponent } from './components/lista-capacitacion/lista-capacitacion.component';
import { ActualizarCapacitacionComponent } from './components/actualizar-capacitacion/actualizar-capacitacion.component';


const routes: Routes = [
  {path:'lista-capacitacion',component:ListaCapacitacionComponent },
  {path:'lista-personas', component: ListaPersonasComponent},
  {path:'',redirectTo:'lista-capacitacion', pathMatch:'full' },
  {path:'crear-capacitacion', component:CrearCapacitacionComponent},
  {path: 'updatecapacitacion/:id', component:ActualizarCapacitacionComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})

export class AppRoutingModule { }
