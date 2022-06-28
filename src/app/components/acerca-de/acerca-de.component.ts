import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
 perfil: Persona;
 
  

 
  constructor(private perfiService:PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.perfiService.getPerfil().subscribe(data=>{this.perfil=data});
  }

  updatePerfil(id: number){
    //Lo envía a través de app-routing.module.ts
    console.log("id Nº "+ id +" Redirigiendo a actualizar Perfil");
    this.router.navigate(['updateperfil',id])
    
  }



}
