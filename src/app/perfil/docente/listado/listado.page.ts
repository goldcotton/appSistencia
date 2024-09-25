import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  tituloAsigDoc = "" //Variable para guardar el titulo de la asignatura seleccionada

  objAlumnos: string[] = []; //Variable para guardar los alumnos converidos en objetos

  constructor(private activeroute: ActivatedRoute, private router: Router) { 

    this.activeroute.queryParams.subscribe(params => { //Se recibe la asignatura seleccionada de la pagina anterior

      
      // this.tituloAsigDoc = this.router.getCurrentNavigation()?.extras.state?.['asig'];

      // this.objAlumnos = this.router.getCurrentNavigation()?.extras.state?.['alum'];
      
      // console.log(this.router.getCurrentNavigation()?.extras.state?.['asig']);

      this.tituloAsigDoc = this.router.getCurrentNavigation()?.extras.state?.['asig'];

      // Aquí convertimos el objeto de alumnos en un array de valores
      const alumnosObj = this.router.getCurrentNavigation()?.extras.state?.['alum']; //Se recibe el arreglo de alumnos de la pagina anterior
      this.objAlumnos = Object.values(alumnosObj); //Se convierte el objeto de alumnos en un arreglo de valores
      
      console.log(this.objAlumnos); //Se imprime el arreglo de alumnos

    });   

  }

  ngOnInit() {
    
  }

  goBackPerfilDocente(){

    this.router.navigate(['docente']); //Se envia la asignatura seleccionada a la siguiente pagina
  }


}
