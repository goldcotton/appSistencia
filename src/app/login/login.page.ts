import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router' ;
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';
//import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }

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

  navegarExtras(){ //Funcion para navegar a la pagina perfil alump con datos a traspasar a la pagina destino (alumno)

    let setData: NavigationExtras = { //Variable para enviar datos a otra pagina
  
     state: { //Estructura de los datos a enviar
  
      id: this.usuario.value.user, // formControlName: 'user'
      user: this.usuario.value.pass // formControlName: 'pass'
  
     }
  
    };

    if(this.usuario.value.user?.includes('@alumno.cl') && this.usuario.value.pass == 'alumno'){
      //this.router.navigate(['/admin'],setData);

      this.router.navigate(['/alumno'],setData);

    }else if(this.usuario.value.user?.includes('@docente.cl') && this.usuario.value.pass == 'docente'){
      //this.router.navigate(['/admin'],setData);

      this.router.navigate(['/docente'],setData);
    }else{

      this.presentAlert("Usuario Invalido","Ingrese un correo o contraseña valida","");
    }

   }

   async presentAlert(titulo: string,subTit: string, mensj: string) { //Funcion para mostrar un mensaje de alerta
    const alert = await this.alertController.create({ // estructura para mostrar un mensaje de alerta
      header: titulo,
      subHeader: subTit,
      message: mensj,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }
  

}
