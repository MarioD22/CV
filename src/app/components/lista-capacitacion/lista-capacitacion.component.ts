import { Component, OnInit } from '@angular/core';
import { capacitacion } from 'src/app/capacitacion';
import { CapacitacionService } from 'src/app/capacitacion.service';

import { Router } from '@angular/router';
import { TokenService } from 'src/app/token.service';




@Component({
  selector: 'app-lista-capacitacion',
  templateUrl: './lista-capacitacion.component.html',
  styleUrls: ['./lista-capacitacion.component.css'],

})
export class ListaCapacitacionComponent implements OnInit {

  Capacitaciones: capacitacion[];


  constructor(private capaservice: CapacitacionService,
    private router: Router,
    private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {

    this.getCapacitaciones();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  //busca todas las capacitaciones //
  private getCapacitaciones() {
    this.capaservice.findAllCapacitacion().subscribe(data => { this.Capacitaciones = data; });

  }

  updateUser(id: number) {
    //Lo envía a través de app-routing.module.ts
    console.log("id Nº " + id + " Redirigiendo a actualizar capacitacion");
    this.router.navigate(['updatecapacitacion', id])

  }


  deleteUser(id: number) {
    this.capaservice.deleteCapacitacin(id).subscribe(
      Data => {
        console.log(Data);
        this.getCapacitaciones();
      })

  }
}









