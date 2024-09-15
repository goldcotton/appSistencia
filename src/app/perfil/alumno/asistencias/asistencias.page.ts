import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  tituloAsig = ""

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
      this.tituloAsig = this.router.getCurrentNavigation()?.extras.state?.['id'];
      console.log(this.router.getCurrentNavigation()?.extras.state?.['user']);
  
    });

    
  
  }

  ngOnInit() {


  }

}
