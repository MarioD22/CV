import { Component, OnInit } from '@angular/core';
import { capacitacion } from 'src/app/capacitacion';
import { CapacitacionService } from 'src/app/capacitacion.service';
/*import { Router } from '@angular/router';*/

@Component({
  selector: 'app-crear-capacitacion',
  templateUrl: './crear-capacitacion.component.html',
  styleUrls: ['./crear-capacitacion.component.css']
})

export class CrearCapacitacionComponent implements OnInit {

  nuevaCapacitacion = new capacitacion();

  constructor(private capaService: CapacitacionService ) { }

  

  ngOnInit(): void {
  }

  saveCapacitacion(){
    this.capaService.createCapacitacion(this.nuevaCapacitacion).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }

  



  onSubmit(){
    console.log(this.nuevaCapacitacion);
    this.saveCapacitacion();
  }

}
