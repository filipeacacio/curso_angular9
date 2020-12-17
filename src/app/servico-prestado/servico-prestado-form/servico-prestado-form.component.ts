import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from 'src/app/clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  success: boolean = false;
  errors: String[];
  clientes: Cliente[] = [];
  servico: ServicoPrestado;

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) {
    this.servico = new ServicoPrestado();
  }

  ngOnInit() {
    this.clienteService
      .getClientes()
      .subscribe(
        response => {
          this.clientes = response;
        }
      );
  }

  onSubmit() {
    console.log(this.servico);
    this.service
      .salvar(this.servico)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.servico = new ServicoPrestado();
        console.log(response);
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
        console.log(errorResponse);
      }
      );
  }
