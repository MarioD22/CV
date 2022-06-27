import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hys } from 'src/app/hys';
import { HysService } from 'src/app/hys.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {

 //creo la variable Hys del tipo hys para traer un arreglo con todas las Hard and soft skill//
  Hys : hys[];

  constructor( private hysservice : HysService,
    private router: Router) { }

  ngOnInit(): void { 
    this.getHys();
  }

  private getHys(){
    this.hysservice.findallhys().subscribe(data=>{this.Hys=data;});
    
  }
  
  updateHys(id: number){
    //Lo envía a través de app-routing.module.ts
    console.log("id Nº "+ id +" Redirigiendo a actualizar Hard and soft skill");
    this.router.navigate(['updatehys',id])
    
  }


  deleteHys(id: number){
    this.hysservice.deleteHys(id).subscribe( 
      Data => {
      console.log(Data);
      this.getHys();
    })

}
  







}
