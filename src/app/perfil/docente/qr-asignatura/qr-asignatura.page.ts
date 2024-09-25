import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-qr-asignatura',
  templateUrl: './qr-asignatura.page.html',
  styleUrls: ['./qr-asignatura.page.scss'],
})
export class QrAsignaturaPage implements OnInit {

  tituloAsigDoc = "" //Variable para guardar el titulo de la asignatura seleccionada
  tituloSiglDoc = "" //Variable para guardar la sigla de la asignatura seleccionada
  objAlumnos: string[] = []; //Variable para guardar la lista de alumnos

  qrCodeString = "" //Variable para guardar el texto del codigo QR
  //se debe instalar posteriormente: npm i angularx-qrcode

  fechaHoy = formatDate(new Date(), 'dd/MM/yyyy', 'en')

  constructor(private activeroute: ActivatedRoute, private router: Router) { 

    this.activeroute.queryParams.subscribe(params => { //Se recibe la asignatura seleccionada de la pagina anterior

      this.tituloAsigDoc = this.router.getCurrentNavigation()?.extras.state?.['tituloAsig']; //Se recibe la asignatura seleccionada de la pagina anterior
      
      this.tituloSiglDoc = this.router.getCurrentNavigation()?.extras.state?.['tituloSeccion']; //Se recibe la asignatura seleccionada de la pagina anterior

      console.log(this.router.getCurrentNavigation()?.extras.state?.['tituloSeccion']);
      console.log(this.router.getCurrentNavigation()?.extras.state?.['qrCodeString']);

      this.qrCodeString = this.tituloAsigDoc + " " + this.tituloSiglDoc +" "+ this.fechaHoy; //Se crea el texto del codigo QR incluye la fecha actual

      const alumnosObj = this.router.getCurrentNavigation()?.extras.state?.['alum']; //Se recibe el arreglo de alumnos de la pagina anterior
      this.objAlumnos = Object.values(alumnosObj); //Se convierte el objeto de alumnos en un arreglo de valores
      
      console.log(this.objAlumnos); //Se imprime el arreglo de alumnos

      
    });   

  }

  ngOnInit() {
  }

  nextPageListado(asignaturaSeleccionada: string){

    let setData: NavigationExtras = { //Se envia la asignatura seleccionada a la siguiente pagina
  
      state: {
   
       asig: asignaturaSeleccionada, //Se envia la asignatura seleccionada por id(asig) del html
   
       alum: this.objAlumnos //Se envia el arreglo de alumnos
      }
   
     };

    this.router.navigate(['docente/listado'],setData); //Se envia la asignatura seleccionada a la siguiente pagina
  }

}
