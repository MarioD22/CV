import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

 
  
  private backendURL: string = "http://localhost:8080/api/v1/persona";
 


  
    constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient  ){ }

    findAllUsers(): Observable<Persona[]>{
      return this.httpClient.get<Persona[]>(`${this.backendURL}`);
    }

    
  getUserById(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.backendURL}/${id}`);
  }

  //POST
  createUser(user: Persona): Observable<Object>{
    return this.httpClient.post(`${this.backendURL}`, user);
  }

  //PUT
  updateUser(id: number, user: Persona): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, user);
  }

  //DELETE
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
  

}
