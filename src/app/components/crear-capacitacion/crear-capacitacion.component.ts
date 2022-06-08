import { Component, OnInit } from '@angular/core';
import { capacitacion } from 'src/app/capacitacion';
import { CapacitacionService } from 'src/app/capacitacion.service';

@Component({
  selector: 'app-crear-capacitacion',
  templateUrl: './crear-capacitacion.component.html',
  styleUrls: ['./crear-capacitacion.component.css']
})

export class CrearCapacitacionComponent implements OnInit {

 
  nuevaCapacitacion: capacitacion = new capacitacion();

  constructor(private capaService: CapacitacionService ) { }

  

  ngOnInit(): void {
  }



  onSubmitForm(){
    this.saveCapacitacion();
  }

  saveCapacitacion(){
    this.capaService.addCapacitacion(this.nuevaCapacitacion).subscribe(data =>console.log(data));
    
  }


/*
  guardar(){
  
  this.capaService.addCapacitacion(this.nuevaCapacitacion).subscribe(data =>console.log(data));
   
  saveCapacitacion(){
    this.capaService.addCapacitacion(this.nuevaCapacitacion).subscribe(  
      data =>{   console.log(data); },
    error => console.log(error));
  }
  }*/




}
