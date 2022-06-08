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
  {path:'actualizar-capacitacion/:id', component: ActualizarCapacitacionComponent} 
  
];
/*
const routes: Routes = [
  {path: 'userlist', component: UserListComponent},
  //Por defecto, redirigimos a la lista de usuarios
  {path: '', redirectTo: 'userlist', pathMatch: 'full'},
  {path: 'createuser', component: CreateUserComponent},
  {path: 'searchuser', component: SearchUserComponent},
  {path: 'updateuser/:id', component: UpdateUserComponent},
  {path: 'userdetails/:id', component: UserDetailsComponent},
  {path: 'about', component: AboutComponent}
];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})

export class AppRoutingModule { }
