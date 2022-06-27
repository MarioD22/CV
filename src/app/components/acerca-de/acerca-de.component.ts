import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

 presentacion: string = "Tengo 38 años, actualmente me encuentro en búsqueda laboral";

 mostrar: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
