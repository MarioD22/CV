import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { capacitacion } from 'src/app/capacitacion';
import { CapacitacionService } from 'src/app/capacitacion.service';

@Component({
  selector: 'app-actualizar-capacitacion',
  templateUrl: './actualizar-capacitacion.component.html',
  styleUrls: ['./actualizar-capacitacion.component.css']
})
export class ActualizarCapacitacionComponent implements OnInit {
 
   capacitacion: capacitacion = new capacitacion();
   id: number;


  constructor( private capaservice : CapacitacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //Recogemos el ID que nos llega en la url desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    //Utilizamos el método de UserService para obtener usuario
    this.capaservice.getCapacitacionById(this.id).subscribe(    
      capa => {
        this.capacitacion = capa;
      }, 
      error => console.log(error));
  }

  
  //Metodo referenciado por el forumulario HTML
  onSubmitForm(){
    this.capaservice.updateCapacitacion(this.id, this.capacitacion).subscribe(
    
      capaData =>{
        console.log(capaData);
        this.redirectCapacitacionList();
      }, 
      error => console.log(error));
  }

  //Redirección a lista de capacitacion
  redirectCapacitacionList(){
    this.router.navigate(['/lista-capacitacion']);
  }




}
