import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  lef retorno: Observable;

  constructor(private http: HttpClient) {}

  salvar(cliente: Cliente): Observable<Cliente> {

    if ( true ) {
      // 200
      this.retorno = this.http.post<Cliente>('https://run.mocky.io/v3/2725fcff-ebf8-489b-9c52-f775f353fa32', cliente);
    } else {
      // 400
      this.retorno =  this.http.post<Cliente>('https://run.mocky.io/v3/a9480ff9-8304-47cf-9cef-b13e60f5ed4f', cliente);
    }

    return this.retorno;
  }

  atualizar(cliente: Cliente): Observable<any> {
    this.retorno = this.http.post<Cliente>(`https://run.mocky.io/v3/2725fcff-ebf8-489b-9c52-f775f353fa32/${cliente.id}`, cliente);
    return this.retorno;
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('https://run.mocky.io/v3/20ea7e9a-e471-4c81-95ff-18f4c675c76d');
  }

  getClientesLocal(): Cliente[] {
    const cliente = new Cliente();
    cliente.id = 1;
    cliente.nome = 'Filipe teste';
    cliente.cpf = '32165498732';
    cliente.dataCadastro = '17/01/1983';
    return [cliente];
  }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano de Tal';
    cliente.cpf = '777.888.999.12';
    return cliente;
  }

  getClienteById(id: number): Observable<Cliente> {
    console.log('id passado na URL: ' + id);
    return this.http.get<any>(`https://run.mocky.io/v3/2725fcff-ebf8-489b-9c52-f775f353fa32/${id}`);
  }

  deletar(id: number): Observable<any> {
    console.log('id passado na URL para deletar: ' + id);
    return this.http.delete<any>(`https://fa-teste.free.beeceptor.com/deletar-cliente/${id}`);
    //return null;
  }

}
