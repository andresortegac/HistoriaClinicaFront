import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl:string = "http://localhost:8090/usuarios/"

  constructor(private http:HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get(this.baseUrl+"consultar");
  }
}
 