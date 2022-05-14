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

    
  getCapacitacionById(id: number): Observable<capacitacion>{
    return this.httpClient.get<capacitacion>(`${this.backendURL}/${id}`);
  }

  //POST creo la variable capacitacion del tipo capacitacion
  createCapacitacion(capacitacion: capacitacion): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, capacitacion);
  }

  //PUT
  updateCapacitacion(id: number, capacitacion: capacitacion): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, capacitacion);
  }

  //DELETE
  deleteCapacitacin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
  

}








