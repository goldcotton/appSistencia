import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ConsumoApiService } from 'src/app/service/consumo-api.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  message = "";

  asignatura = {"estadistica": "Estadistica Descriptiva", "etica": "Etica Laboral", "algebra": "Algebra y trigonometria", "algoritmos": "Programacion de algoritmos"} //Asignaturas disponibles para el alumno en un arreglo

  sigla = {"estadistica": "EST", "etica": "ETI", "algebra": "ALG", "algoritmos": "ALG"} //Siglas de las asignaturas disponibles para el alumno en un arreglo

  seccion = {"diurno1": "100", "diurno2": "200", "vespertino1": "300", "vespertino2": "400"} //Secciones de las asignaturas disponibles para el alumno en un arreglo

  alumnos = {"a1":"Acevedo Sanchez Luis Mario","a2":"Aguilar Lopez Juan Carlos", "a3":"Alvarez Perez Maria Guadalu"}

  constructor(private consumoApi:ConsumoApiService ,private activerout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.mosrarDatosApi(); //Se llama a la funcion para mostrar los datos de la api
  }

  mosrarDatosApi(){ //Funcion para mostrar los datos de la api

    this.consumoApi.getPosts().subscribe((res) => { //Se obtienen los datos de la api
      this.message =' '+ res[0]; //Se muestra un mensaje
      console.log(res); //Se muestran los datos en la consola

    },(error) => { //En caso de error
      console.error(error); //Se muestra el error en la consola
      this.message = "Error al obtener los datos de la api"; //Se muestra un mensaje
    });

  }

  nextPageListado(asignaturaSeleccionada: string){

    let setData: NavigationExtras = { //Se envia la asignatura seleccionada a la siguiente pagina
      state: {
       asig: asignaturaSeleccionada, //Se envia la asignatura seleccionada por id(asig) del html
   
       alum: this.alumnos, //Se envia el arreglo de alumnos

      }
   
     };

    this.router.navigate(['docente/listado'],setData);
  }

  nextPageQR(asignatura: string, sigla: string, seccion: string){ 

    let setData: NavigationExtras = { //Se envia la asignatura seleccionada a la siguiente pagina
      state: {
        tituloAsig: asignatura, //Se envia la asignatura seleccionada por id(asig) del html
        tituloSeccion: sigla + seccion, //Se envia la asignatura seleccionada por id(asig) del html, la sigla y la seccion

        alum: this.alumnos, //Se envia el arreglo de alumnos
   
      }
   
     };

    this.router.navigate(['docente/qr-asignatura'],setData); //Se envia la asignatura seleccionada a la siguiente pagina
  }

}
