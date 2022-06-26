import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys } from './hys';

@Injectable({
  providedIn: 'root'
})
export class HysService {

  private backendURL: string = "http://localhost:8080/api/v1/";

  constructor(//HttpClient para proporcionar métodos que reciben datos del backend
  private httpClient: HttpClient) { }

findallhys():Observable<hys[]>{
  return this.httpClient.get<hys[]>(`${this.backendURL}`);
}

getHysByID( id:number):Observable<hys>{
  return this.httpClient.get<hys>(`${this.backendURL}/findbyid/+${id}`);
}


  //POST
  createHys(hys:hys): Observable<Object>{
    return this.httpClient.post(`http://localhost:8080/api/v1/new/hys`, hys);
  }

  //PUT
  updateHys(id: number, hys:hys): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/hys/edit/${id}`,hys);
  }

  //DELETE
  deleteHys(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/hys/delete/${id}`);
  }
  




}
