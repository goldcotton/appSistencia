import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  asignatura = {"estadistica": "Estadistica Descriptiva", "etica": "Etica Laboral", "algebra": "Algebra y trigonometria", "algoritmos": "Programacion de algoritmos"} //Asignaturas disponibles para el alumno en un arreglo

  sigla = {"estadistica": "EST", "etica": "ETI", "algebra": "ALG", "algoritmos": "ALG"} //Siglas de las asignaturas disponibles para el alumno en un arreglo

  seccion = {"diurno1": "100", "diurno2": "200", "vespertino1": "300", "vespertino2": "400"} //Secciones de las asignaturas disponibles para el alumno en un arreglo

  alumnos = {"a1":"Acevedo Sanchez Luis Mario","a2":"Aguilar Lopez Juan Carlos", "a3":"Alvarez Perez Maria Guadalu"}

  constructor(private activerout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
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

        tituloAsig: asignatura,

        tituloSeccion: sigla + seccion, //Se envia la asignatura seleccionada por id(asig) del html, la sigla y la seccion

        alum: this.alumnos, //Se envia el arreglo de alumnos
   
      }
   
     };

    this.router.navigate(['docente/qr-asignatura'],setData); //Se envia la asignatura seleccionada a la siguiente pagina
  }

}
