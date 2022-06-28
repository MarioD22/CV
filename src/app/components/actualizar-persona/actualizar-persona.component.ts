import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit {
  perfi: Persona = new Persona();
  id: number; 

  constructor(
    private perfilService : PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);   
    console.log("este es la ide que viene de la info personal>> " + this.id);
    this.perfilService.getPerfil().subscribe 
    /*this.hysService.getHysByID(+this.id).subscribe*/
     (data => {
     this.perfi = data;
     
     },error => console.error("no carga id"));    


  }

//Metodo referenciado por el forumulario HTML
onSubmitForm(){
  this.perfilService.updateUser(this.id,this.perfi).subscribe
  ( 
    Data =>{
      console.log("actualizacion" + Data);
      this.redirectUserList();
    }, 
    error => console.log(error));
}
 
//Redirección a lista de capacitaciones a HOME
redirectUserList(){
  this.router.navigate(['']);
}


}
