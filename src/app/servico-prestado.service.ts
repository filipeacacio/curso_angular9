import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicoPrestado } from './servico-prestado/servicoPrestado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  constructor(
    private http: HttpClient
  ) { }

  salvar(servicoPrestado: ServicoPrestado): Observable<ServicoPrestado>{}
}
