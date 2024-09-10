import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router' ;
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoadingController } from '@ionic/angular';
//import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  usuario = new FormGroup({

    user: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  
    pass: new FormControl('',[Validators.required, Validators.minLength(4),Validators.maxLength(20)]),
  
   }); //Variable para guardar los datos del usuario
  
  ngOnInit() { //Aqui se cargaran los datos cuando se carga la pagina por primera vez
  }

  navegar(){ //Funcion para navegar a la pagina home
    //this.router.navigate(['/home']);

    let navigationExtras: NavigationExtras = {
      state: {user: this.usuario}
      };
      this.router.navigate(['/alumno'],navigationExtras);
  }

  navegarExtras(){

    let setData: NavigationExtras = {
  
     state: {
  
      id: this.usuario.value.user,
      user: this.usuario.value.pass
  
     }
  
    };

    if(this.usuario.value.user?.includes('@alumno.cl') && this.usuario.value.pass == 'alumno'){
      //this.router.navigate(['/admin'],setData);

      this.router.navigate(['/alumno'],setData);
    }

    if(this.usuario.value.user?.includes('@alumno.cl') && this.usuario.value.pass == 'alumno'){
      //this.router.navigate(['/admin'],setData);

      this.router.navigate(['/alumno'],setData);
    }
    
  
   }
  

}
