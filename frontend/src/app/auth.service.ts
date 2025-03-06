import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { environment } from "./environment"
import { tap } from 'rxjs';

@Injectable({

providedIn: 'root',

})

export class AuthService {

private apiUrl = environment.apiUrl;

constructor(private http: HttpClient) {}

signup(user: { email : string, username: string; password: string  }) {

return this.http.post(`${this.apiUrl}/signup`, user);

}

login(credentials: { username: string; password: string }) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.token);  
      })
    );
  }
}