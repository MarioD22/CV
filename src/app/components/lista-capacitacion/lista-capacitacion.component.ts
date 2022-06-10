import { Component, OnInit } from '@angular/core';
import { capacitacion } from 'src/app/capacitacion';
import { CapacitacionService } from 'src/app/capacitacion.service';

import { Router } from '@angular/router';




@Component({
  selector: 'app-lista-capacitacion',
  templateUrl: './lista-capacitacion.component.html',
  styleUrls: ['./lista-capacitacion.component.css'],
  
})
export class ListaCapacitacionComponent implements OnInit {

  Capacitaciones : capacitacion[];
 

  constructor( private capaservice :CapacitacionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCapacitaciones();
  }

  private getCapacitaciones(){
    this.capaservice.findAllCapacitacion().subscribe(data=>{this.Capacitaciones=data;});
       
  }
  
  updateUser(ide: number){
    //Lo envía a través de app-routing.module.ts
    console.log("id Nº "+ ide +" Redirigiendo a actualizar capacitacion");
    this.router.navigate(['updatecapacitacion',ide])
    
  }


  deleteUser(id: number){
    this.capaservice.deleteCapacitacin(id).subscribe( 
      Data => {
      console.log(Data);
      this.getCapacitaciones();
    })

}
}






  


