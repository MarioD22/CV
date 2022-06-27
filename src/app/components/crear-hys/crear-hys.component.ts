import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hys } from 'src/app/hys';
import { HysService } from 'src/app/hys.service';

@Component({
  selector: 'app-crear-hys',
  templateUrl: './crear-hys.component.html',
  styleUrls: ['./crear-hys.component.css']
})
export class CrearHysComponent implements OnInit {

  nuevaHys: hys = new hys();

  constructor(private hysService: HysService , private router: Router) { }

  ngOnInit(): void {
  }

//metodo del formulario de carga de HYS//
   
onSubmitForm(){
   
  this.hysService.createHys(this.nuevaHys).subscribe( 
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
