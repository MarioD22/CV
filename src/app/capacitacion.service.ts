import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { capacitacion } from './capacitacion';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService { 


  private backendURL: string = "http://localhost:8080/api/v1";
 


  
    constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient  ){ }

    findAllCapacitacion(): Observable<capacitacion[]>{
      return this.httpClient.get<capacitacion[]>(`${this.backendURL}/capacitacion`);
    }

    
  getCapacitacionById(id: number): Observable<capacitacion>{
    return this.httpClient.get<capacitacion>(`${this.backendURL}/${id}`);
  }
   

  public addCapacitacion( capacitacion:capacitacion): Observable<capacitacion>{ 
    return this.httpClient.post<capacitacion>(`${this.backendURL}/new/capacitacion`,capacitacion);
  } 
  //POST creo la variable capacitacion del tipo capacitacion
  createCapacitacion(capacitacion: capacitacion): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}/new/capacitacion`,capacitacion);
  }

  //PUT
  updateCapacitacion(id: number, capacitacion: capacitacion): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/edit/capacitacion/${id}`, capacitacion);
  }

  //DELETE
  deleteCapacitacin(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/delete/capacitacion/${id}`);
  }
  

}








