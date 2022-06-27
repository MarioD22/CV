import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:string="";

  pass:string="";

  mostrar: boolean = true;


  constructor(private route:Router,
               ) { }

  ngOnInit(): void {
  }

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



}
