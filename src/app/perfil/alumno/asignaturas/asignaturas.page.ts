import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  asignatura = {"estadistica": "Estadistica Descriptiva", "etica": "Etica Laboral", "algebra": "Algebra y trigonometria", "algoritmos": "Programacion de algoritmos"} //Asignaturas disponibles para el alumno en un arreglo

  sigla = {"estadistica": "EST", "etica": "ETI", "algebra": "ALG", "algoritmos": "ALG"} //Siglas de las asignaturas disponibles para el alumno en un arreglo

  seccion = {"diurno1": "100", "diurno2": "200", "vespertino1": "300", "vespertino2": "400"} //Secciones de las asignaturas disponibles para el alumno en un arreglo

  porcAsis = 0

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    
  }

  ngOnInit() {

  }

  nextPageAsignaturas(asignaturaSeleccionada: string){ //Funcion para enviar la asignatura seleccionada a la siguiente pagina

    let setData: NavigationExtras = { //Se envia la asignatura seleccionada a la siguiente pagina
  
      state: {
   
       asig: asignaturaSeleccionada, //Se envia la asignatura seleccionada por id(asig) del html
   
      }
   
     };

    this.router.navigate(['alumno/asistencias'],setData); //Se envia la asignatura seleccionada a la siguiente pagina
  }

  pocentajeAsistencia(){ //Funcion para calcular el porcentaje de asistencia del alumno

    //INCOMPLETO
    this.porcAsis = 100

    const element = document.getElementById('asis');

    if (element) {
      const totalClasses = parseInt(element.getAttribute('data-total-classes') || '0', 10);
      const attendedClasses = parseInt(element.getAttribute('data-attended-classes') || '0', 10);
      if (totalClasses > 0) {
        this.porcAsis = (attendedClasses / totalClasses) * 100;
      }
    }

    return this.porcAsis

  }

}
