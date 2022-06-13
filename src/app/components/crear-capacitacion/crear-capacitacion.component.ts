import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { capacitacion } from 'src/app/capacitacion';
import { CapacitacionService } from 'src/app/capacitacion.service';

@Component({
  selector: 'app-crear-capacitacion',
  templateUrl: './crear-capacitacion.component.html',
  styleUrls: ['./crear-capacitacion.component.css']
})

export class CrearCapacitacionComponent implements OnInit {

  
  nuevaCapacitacion: capacitacion = new capacitacion();

  constructor(private capaService: CapacitacionService , private router: Router
    ) { }

  

  ngOnInit(): void {
  }


   //metodo del formulario de carga de capacitaciones//
   
  onSubmitForm(){
   
   this.capaService.addCapacitacion(this.nuevaCapacitacion).subscribe( 
    Data =>{
      console.log("Se creo el usuario " + Data);
      this.redirectUserList();
    }, 
    error => console.log(error));    
   
  }
  

  
  redirectUserList(){
    this.router.navigate(['/home']);
  }
 


}
