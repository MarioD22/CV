import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys } from 'src/app/hys';
import { HysService } from 'src/app/hys.service';

@Component({
  selector: 'app-actualizar-hys',
  templateUrl: './actualizar-hys.component.html',
  styleUrls: ['./actualizar-hys.component.css']
})
export class ActualizarHysComponent implements OnInit {
   

  Hys: hys = new hys();
  id: number; 


  constructor(
    private hysService : HysService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

// cuando carga la pagina trae la id del listado para modificar//

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.params['id']);   
    console.log("este es la ide que viene del listado de skils>> " + this.id);
     this.hysService.getHysByID(+this.id).subscribe
     (data => {
     this.Hys = data;
     
     },error => console.error("no carga id"));    
   
  }


  
 //Metodo referenciado por el forumulario HTML
 onSubmitForm(){
  this.hysService.updateHys(this.id,this.Hys).subscribe( 
    Data =>{
      console.log("actualizacion" + Data);
      this.redirectUserList();
    }, 
    error => console.log(error));
}


//Redirección a lista de capacitaciones a HOME
redirectUserList(){
  this.router.navigate(['']);
}


}
