import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  tituloAsig = "" //Variable para guardar el titulo de la asignatura seleccionada
  tutloSeccion = "" //Variable para guardar el titulo de la seccion seleccionada

  constructor(private activeroute: ActivatedRoute, private router: Router) { //Se recibe la asignatura seleccionada de la pagina anterior

    //intento de recibir la asignatura seleccionada

    this.activeroute.queryParams.subscribe(params => { //Se recibe la asignatura seleccionada de la pagina anterior

      this.tituloAsig = this.router.getCurrentNavigation()?.extras.state?.['asig'];
      
      console.log(this.router.getCurrentNavigation()?.extras.state?.['asig']);
  
    });

    
  
  }

  ngOnInit() {


  }

}
