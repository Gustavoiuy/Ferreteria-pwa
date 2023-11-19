import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';


import { AdminGuard } from '../guards/admin.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { DetalleComponent } from './pages/detalle/detalle.component';


const routes: Routes = [
  {
    path: '',
    
    canLoad: [ AuthGuard ],
    children: [
      {
        path: 'inicio',
        component: AdminComponent
      },
      {
        path: 'detalle',
        component: DetalleComponent
      },
    // //   {
    //     path: 'buscar/:termino',
    //     component: BusquedaComponent
    //   },

      // Mantenimientos
    //   {
    //     path: 'usuarios',
    //     // SOLO ADMIN
    //     canActivate: [ AdminGuard ]
    //     ,
    //     component: UsuariosComponent
    //   },







    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestorRoutingModule { }

