import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { capacitacion } from './capacitacion';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService { 


  private backendURL: string = "http://localhost:8080/api/v1/capacitacion";
 


  
    constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient  ){ }

    findAllCapacitacion(): Observable<capacitacion[]>{
      return this.httpClient.get<capacitacion[]>(`${this.backendURL}`);
    }

    // http://localhost:8080/api/v1/capacitacion/findById/2 //

  getCapacitacionById(id: number): Observable<capacitacion>{
    return this.httpClient.get<capacitacion>(`${this.backendURL}/findById/+${id}`);
  }
  

 //POST
  public addCapacitacion( capacitacion:capacitacion): Observable<capacitacion>{ 
    return this.httpClient.post<capacitacion>(`http://localhost:8080/api/v1/new/capacitacion`,capacitacion);
  } 
 

  //PUT
  //http://localhost:8080/api/v1/capacitacion/edit/{id}//
  updateCapacitacion(id: number, capacitacion: capacitacion): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/edit/${id}`, capacitacion);
  }

  //DELETE
  //http://localhost:8080/api/v1/capacitacion/delete/{id} //
  deleteCapacitacin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/delete/${id}`);
  }
  

}








