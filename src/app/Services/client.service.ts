import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cliente } from '../module/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) { }
  private client = new BehaviorSubject<Cliente>(new Cliente());
  

  public share = this.client.asObservable();

  loginUser(cliente:Cliente):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(cliente);
    console.log(body);
    return this.http.post("http://localhost:8080/api/users/login",body,{'headers':headers});
  }
  registerUser(cliente:Cliente):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(cliente);
    console.log(body);
    return this.http.post("http://localhost:8080/api/users/register",body,{'headers':headers});
  }


}
