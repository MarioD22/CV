import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/persona.service';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})

export class LogoAPComponent implements OnInit {
  /*jwt*/
  isLogged = false;
  /**** */


  perfil: Persona = new Persona();
  usuario:string;

  constructor(private route: Router,
    private perfilService: PersonaService,

    private tokenService : TokenService
  ) { }

  ngOnInit(): void {
  /*jwt*/
  if(this.tokenService.getToken()){
    this.isLogged=true;
    this.usuario=this.tokenService.getUserName();
  }else {
     this.isLogged=false;
  }
  /*_____ */
  
    this.buscarPerfil();
    
  }
/*jwt*/
onLogOut() : void{
  this.tokenService.logOut();
  window.location.reload();
}

/*------- */

  buscarPerfil() {
    this.perfilService.getPerfil().subscribe(data => { this.perfil = data });


  }

  login() {
    this.route.navigate(['/login'])
  }

}
