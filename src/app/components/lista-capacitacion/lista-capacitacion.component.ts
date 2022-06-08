import { Component, OnInit } from '@angular/core';
import { capacitacion } from 'src/app/capacitacion';
import { CapacitacionService } from 'src/app/capacitacion.service';


@Component({
  selector: 'app-lista-capacitacion',
  templateUrl: './lista-capacitacion.component.html',
  styleUrls: ['./lista-capacitacion.component.css'],
  
})
export class ListaCapacitacionComponent implements OnInit {

  Capacitaciones : capacitacion[];
  activatedRoute: any;
  router: any;

  constructor( private capaservice :CapacitacionService) { }

  ngOnInit(): void {
    this.getCap();
  }

  private getCap(){
    this.capaservice.findAllCapacitacion().subscribe(data=>{this.Capacitaciones=data;});
       
  }







  

}
