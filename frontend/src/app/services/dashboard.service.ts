import { Injectable, isStandalone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';


@Injectable({

  providedIn: 'root' // ارائه سرویس در سطح ریشه
})
export class DashboardService {
  private apiUrl =  'http://localhost:3000/dashboard'; // آدرس API سرور

  constructor(private http: HttpClient) {}

  
  getUserData(): Observable<any> {
   
    const token = localStorage.getItem('accessToken');

    
    
    const headers = new HttpHeaders().set("authorization", `Bearer ${token}`);

    
    return this.http.get(this.apiUrl, { headers });
  }
}