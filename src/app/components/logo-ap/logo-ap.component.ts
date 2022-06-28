import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})

export class LogoAPComponent implements OnInit {

  perfil : Persona = new Persona();
  
  
  constructor(private route:Router, private perfilService:PersonaService) { }

  ngOnInit(): void {
    this.buscarPerfil();
  }


  buscarPerfil(){
   this.perfilService.getPerfil().subscribe(data =>{this.perfil=data});
   
    
   }

  login(){
    this.route.navigate(['/login'])
  }

}
