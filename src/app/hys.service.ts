import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys } from './hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {

  private backendURL: string = "https://murmuring-lake-19567.herokuapp.com/api/v1/";

  constructor(//HttpClient para proporcionar métodos que reciben datos del backend
  private httpClient: HttpClient) { }


//Buscar todas las habilidades >> http://localhost:8080/api/v1/hys   //

findallhys():Observable<hys[]>{
  return this.httpClient.get<hys[]>(`${this.backendURL}hys`);
}


//Buscar una habilidad>> http://localhost:8080/api/v1/hys/findById/2   
                        
getHysByID( id:number):Observable<hys>{
  return this.httpClient.get<hys>(`https://murmuring-lake-19567.herokuapp.com/api/v1/hys/findById/${id}`);
}


  //POST
  // crear una habilidad nueva>> http://localhost:8080/api/v1/new/hys  //
  createHys(hys:hys): Observable<Object>{
    return this.httpClient.post(`https://murmuring-lake-19567.herokuapp.com/api/v1/new/hys`, hys);
  }

  //PUT
  //actualizar datos>> http://localhost:8080/api/v1/hys/edit/{id}//
  updateHys(id: number, hys:hys): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}hys/edit/${id}`,hys);
  }
  
  //DELETE
  //Elimina capacitacion>> http://localhost:8080/api/v1/hys/delete/{id} //
  deleteHys(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}hys/delete/${id}`);
  }
  




}
