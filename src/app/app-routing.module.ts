import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { guardGuard } from './guard/guard.guard';
import { PageNotfoundPage } from './page-notfound/page-notfound.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [guardGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./paginas/loader/loader.module').then( m => m.LoaderPageModule)
  },
  
  {
    path: 'alumno',
    loadChildren: () => import('./perfil/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./perfil/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-notfound/page-notfound.module').then( m => m.PageNotfoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
