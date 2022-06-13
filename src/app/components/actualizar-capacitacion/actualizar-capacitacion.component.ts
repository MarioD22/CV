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

 constructor(       
   
   private capaservice : CapacitacionService,
   private activatedRoute: ActivatedRoute,
   private router: Router
   ) { 
     
   }
  

   
 ngOnInit(): void {   
   this.id = parseInt(this.activatedRoute.snapshot.params['id']);   
    console.log("este es la ide que viene del listado de capacitacion>>" + this.id);
     this.capaservice.getCapacitacionById(+this.id).subscribe
     (data => {
     this.capacitacion = data;
     
     },error => console.error("no carga id"));    
   
 }
 
 //Metodo referenciado por el forumulario HTML
 onSubmitForm(){
   this.capaservice.updateCapacitacion(this.id,this.capacitacion).subscribe( 
     Data =>{
       console.log("actualizacion" + Data);
       this.redirectUserList();
     }, 
     error => console.log(error));
 }

 
 //Redirección a lista de capacitaciones
 redirectUserList(){
   this.router.navigate(['']);
 }

  

}






