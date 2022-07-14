import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';
import { LoginUsuario } from 'src/app/login-usuario';
import { TokenService } from 'src/app/token.service';
import { AuthService } from 'src/app/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isLogged = false;
 isLogginFail = false;
 loginUsuario!: LoginUsuario;
 nombreUsuario!: string;
 password!: string;
 roles: string[] = [];
 errMsj!: string;
  /*
  login sin JWT
  usuario:string="";

  pass:string="";

  mostrar: boolean = true;
  Login sin JWT*/





  constructor(
    private tokenService : TokenService,
    private authService : AuthService,
    private router:Router,
               ) { }

  ngOnInit(): void {
  if ( this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail=false;
    this.roles = this.tokenService.getAuthorities();
  }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario (this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail=false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles=data.authorities;
      this.router.navigate(['']);
    }, err => {
               this.isLogged=false;
               this.isLogginFail=true;
               this.errMsj = err.error.mensaje;
               console.log(this.errMsj);
    })
  }



/*Login sin JWT
  aparece(){
       if ((this.usuario==="admin") && (this.pass==="1234")) {
        console.log("usuario logueado"+this.usuario+" "+this.pass );
        this.mostrar=false;
       this.route.navigate(['/home'])
       
       ;
       
        
       } else
        { console.log("error de logueo")
      }
    }
Login sin JWT
*/

}
