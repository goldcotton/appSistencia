import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  
  ngOnInit() { //Aqui se cargaran los datos cuando se carga la pagina por primera vez
  }

  navegar(){ //Funcion para navegar a la pagina home
    this.router.navigate(['/home']);
  }


}
