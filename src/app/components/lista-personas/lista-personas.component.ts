import { Component, OnInit } from '@angular/core';
/*import { Router } from '@angular/router';*/
import { Persona } from 'src/app/persona';
/*Importo la clase persona para poder usarla */
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  Personas : Persona[];
  
  constructor(
    private PersonaService :PersonaService,
    /*private router: Router */
  ) {}

  ngOnInit(): void {   
   
    this.getUsers();

  }
  


  private getUsers(){
    this.PersonaService.findAllUsers().subscribe(data=>{this.Personas=data;});
    
  }
  /*
  updateUser(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateuser', id]);
  }*/
  
  deleteUser(id: number){
    this.PersonaService.deleteUser(id).subscribe( 
      userData => {
      console.log(userData);
      //Volvemos a recuperar los Users tras el borrado
      this.getUsers();
    })
  }


    
  /* creo manualmente los datos a mostrar solo para prueba porque realmente tiene que traerlos de la bd 
  this.Personas=[{
    "id":3,
    "nombre":"mario daniel",
    "apellido":"cena",
    "edad":"48",
    "mail":"mario@mail"
     },
     {"id":1,
     "nombre":"mario",
     "apellido":"cena",
     "edad":"38",
     "mail":"mario@mail.com"},
     {"id":2,
     "nombre":"damian"
     ,"apellido":"cena"
     ,"edad":"30",
     "mail":"damian@mail.com"}]*/
    
  
    }
  

