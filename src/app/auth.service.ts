import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usario } from './login/usuario';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiBaseURL;

  constructor(
    private http: HttpClient
  ) { }

  salvar(usuario: Usario): Observable<Cliente> {
    // return this.http.post<any>(`${this.apiURL}/v3/a9480ff9-8304-47cf-9cef-b13e60f5ed4f`, usuario);
    return this.http.post<any>(`${this.apiURL}/v3/66809e55-f20b-4b1e-bca3-fe62c7a6ed79`, usuario);
  }
}
