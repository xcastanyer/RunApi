import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {  Employee } from './models/networks';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  readonly BaseURI = 'https://localhost:44361/api';
  constructor(private http:HttpClient) { }

  obtenerValues()
  {

   
    return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees');
  }


}
