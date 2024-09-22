import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  estadisticaDesc = "Estadistica Descriptiva"

  asignatura = {"estadistica": "Estadistica Descriptiva", "etica": "Etica Laboral", "algebra": "Algebra", "algoritmos": "Programacion de algoritmos"}

  porcAsis = 0

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    
  }

  ngOnInit() {



  }

  nextPageAsignaturas(){

    let setData: NavigationExtras = {
  
      state: {
   
       aig: this.asignatura,
   
      }
   
     };

    this.router.navigate(['alumno/asistencias'],setData);
  }

  pocentajeAsistencia(){
    //incompleto
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
