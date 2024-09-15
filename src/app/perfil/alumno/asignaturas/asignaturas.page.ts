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

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    
  }

  ngOnInit() {
  }

  nextPageAsignaturas(){

    let setData: NavigationExtras = {
  
      state: {
   
       id: this.estadisticaDesc,
   
      }
   
     };

    this.router.navigate(['alumno/asistencias'],setData);
  }


}
