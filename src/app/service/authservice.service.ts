import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private authenticated = false; // seteamos la variable authenticated en false por defecto

  constructor() { }

  isLoggednIn() { // creamos un método que nos devuelva el valor de la variable authenticated para saber si el usuario está logueado o no, metodo utilizado por el guard
    return this.authenticated;
  }
  
  login() { // creamos un método para loguear al usuario cambiando el valor de la variable authenticated a true
    this.authenticated = true;
  }
  logout() { // creamos un método para desloguear al usuario cambiando el valor de la variable authenticated a false  
    this.authenticated = false;
  }
}
