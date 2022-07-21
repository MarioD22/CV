import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

 
  
  private backendURL: string = "https://murmuring-lake-19567.herokuapp.com/api/v1/persona";
 


  
    constructor(
    //HttpClient para proporcionar métodos que reciben datos del backend
    private httpClient: HttpClient  ){ }

    getPerfil(): Observable<Persona>{
      return this.httpClient.get<Persona>(this.backendURL+'/traer/perfil');
    }
/*
    public getPersona():Observable<persona>{
      return this.http.get<persona>(this.URL+'personas/traer/perfil');
    }*/

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
