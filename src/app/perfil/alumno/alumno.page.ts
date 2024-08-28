import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  qrCodeString = 'Ejemplo de odigo QR de asistencia'; //Variable para guardar el codigo QR

  scannedResult: any; //Variable para guardar el resultado del escaneo

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
  
      console.log( this.router.getCurrentNavigation()?.extras.state?.['user']);
  
      console.log(this.router.getCurrentNavigation()?.extras.state?.['id']);
  
    });
  
   }

  ngOnInit() {
  }

  startScan(){
    console.log("Scan");
  }

}
