import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  // public menu: any[] = [];

  constructor(
    private router: Router
  ) { }

  cargarMenu(){
    this.menu = JSON.parse(localStorage.getItem('menu') || '' ) || [];
    
    if( this.menu.length === 0 ){
      //Redireccionar al login
      return this.router.navigateByUrl('/auth/login');
    }
    return
  }
  

  menu: any[] = [
    {
      titulo: 'Menu',
      icono: 'home',
      submenu: [
        {  
          titulo: 'Inicio', url: '/gestor/inicio'
        },
        {  
          titulo: 'Mi cuenta', url: '/gestor/perfil'
        },
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'settings',
      submenu: [
        {
            titulo: 'Usuarios', url: '/gestor/usuarios'
        },                    
        {
            titulo: 'Logo', url: '/gestor/logo'
        },
        {
            titulo: 'Carrusel', url: '/gestor/carruseles'
        },                    
        {
            titulo: 'Estadios', url: '/gestor/estadios'
        }
    ]
},{
  titulo: 'Partidos',
  icono: 'ball',
  submenu: [
      {
          titulo: 'Ligas', url: '/gestor/ligas'
      },
      {
          titulo: 'Jornadas', url: '/gestor/jornadas'
      },
      {
          titulo: 'Equipos', url: '/gestor/equipos'
      },
      {
          titulo: 'Jugadores', url: '/gestor/jugadores'
      },                  
      // {
      //     titulo: 'Resultados', url: '/gestor/resultados'
      // }
  ]
},
    // {
    //   titulo: 'Diseño',
    //   icono: 'edit',
    //   submenu: [
    //     {  
    //       titulo: 'carrusel', url: '/gestor/pepe'
    //     },
    //     {  
    //       titulo: 'icono', url: '/gestor/pepe'
    //     },
    //   ]
    // },
  ];


}
