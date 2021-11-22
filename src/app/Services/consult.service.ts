import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consult } from '../module/consult';

@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  private url: string = 'http://localhost:8080/api/users';
  constructor(private http: HttpClient) { }


  postc(consult,accountId:string):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(consult);
    console.log(body);
    return this.http.post(`${this.url}/${accountId}/consultations`,consult,{'headers':headers});
  }

  Getconsult(accountId: string): Observable<Consult[]> {
    return this.http.get<Consult[]>(`${this.url}/${accountId}/consultations`);
  }
}
