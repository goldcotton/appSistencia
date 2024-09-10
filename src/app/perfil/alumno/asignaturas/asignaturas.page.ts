import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nextPageAsignaturas(){
    this.router.navigate(['alumno/asistencias']);
  }


}
