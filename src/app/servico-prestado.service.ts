import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { ServicoPrestadoBusca } from './servico-prestado/servico-prestado-lista/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  apiURL: string = environment.apiBaseURL;
  // apiURLBeeceptor: string = environment.apiBaseURLBeeceptor;

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado> {
    return this.http.post<ServicoPrestado>(`${this.apiURL}/v3/80b6b44f-44fc-4be5-b872-dfa83ea75189`, servicoPrestado);
  }

  buscar(nome: string, mes: number): Observable<ServicoPrestadoBusca[]> {
    const httpParams = new HttpParams()
      .set('nome', nome)
      .set('mes', mes? mes.toString() : '');


    const url = this.apiURL + '?' + httpParams.toString();
    console.log(url);
    return this.http.get<any>(`${this.apiURL}/v3/d26f0cd6-f87a-443c-a9b9-ea270daa948a`);
  }
}
