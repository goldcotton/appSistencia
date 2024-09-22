import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  estadisticaDesc = "Estadistica Descriptiva"

  constructor(private activerout: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }


  nextPageListado(){

    let setData: NavigationExtras = {
  
      state: {
   
       id: this.estadisticaDesc,
   
      }
   
     };

    this.router.getCurrentNavigation()?.extras.state?.['asig']
    this.router.navigate(['docente/listado']);
  }

  nextPageQR(){
    this.router.navigate(['login']);
  }

}
