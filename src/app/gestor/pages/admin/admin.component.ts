import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',
                './admin.component copy.css',
                './admin.componente.css',
                './admin.componentt.css',
                './admin.componetess.css',
                './admin.componetessss.css',
                './admin.componentedos.css',
                './admintres.css',
                './admincuatro.css',
                './admincinco.css',
                './adminseis.css',
                './adminsiete.css',
                './adminocho.css',
                './adminnueve.css',
                './admindiez.css',
                './adminonce.css',
                './admin.doce.css',
                './admintrece.css',
                './admincatorce.css',
                './adminz.css',
                './admin.zz.css',
                './adminzx.css',
                './adminzx.css',
                './adminxxx.css',
                './admin.xl.css',
                './adminxxzz.css',
                './adminxxxx.css',
                './adminxxzzxx.css',
                './adminarbol.css',
                './adminbabo.css',
                './adminckan.css',
                './admindavo.css',
                './adminecko.css',
                './adminfofo.css',
                './adminhuevo.css',
                './adminiguano.css',
                './adminjjk.css',
                './adminkkas.css',
                './adminlalos.css',
                './adminmamon.css',
                './adminnanon.css',
                './adminñañon.css',
                './adminoso.css',
                './adminpp.css',
                './adminlonganiza.css',
                './adminpeso.css',
                './adminpluma.css',
                './adminpesoPluma.css',
                './adminpepe.css',
                './adminlalito.css',
                './adminkakotas.css',
                './adminKAKOTOTA.css',
                './adminElkakas.css',
                './adminjkl.css',
                './adminBadbunny.css',
                './adminBrayan.css',
                './adminLady.css',
                './zas.css',
                './ZASS.css',
                './ZOPA.css',
                './ZAL.css',
                './ZOOL.css',
                './ZOPATELAS.css',
                './ZOPAPAS.css',
                './ZOLEC.css',
                './ZOCIEGO.css',
                './ZACA.css',
                './ZECE.css',
                './ZIND.css',
                './ZZOPATE.css',
                './ZZACA.css',
                './ZZZ.css',
                './ZZZZ.css'
            
            ]
})
export class AdminComponent {


    

    mostrarPerfil: boolean = false;
    mostrarProduct: boolean = false;
    isOptionsVisible: boolean = false;
    mostrarUsuarios: boolean = false;


    toggleOptions() {
      this.isOptionsVisible = !this.isOptionsVisible;
    }

    isExpanded: boolean = false;
    isExpand: boolean=false
  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }


  MostrarUsarios() {
    this.mostrarUsuarios = !this.mostrarUsuarios;
    this.mostrarProduct = false
    this.mostrarPerfil = false
  }

  MostrarPerfil() {
    this.mostrarPerfil = true;
    this.mostrarProduct = false
    this.mostrarUsuarios = false;
  }

  
  MostrarProductos() {
    this.mostrarProduct = true;
    this.mostrarPerfil = false
    this.mostrarUsuarios = false;
  }


  isSidebarVisible = true; // Variable para controlar la visibilidad del panel lateral

  // Función para alternar la visibilidad del panel lateral
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  isSidebarHidden = false; // Variable para controlar la visibilidad del contenido de la barra lateral

  // Función para alternar la visibilidad del contenido de la barra lateral
 

// Variable para controlar la visibilidad del contenido de la barra lateral

  // Función para ocultar la barra lateral y mostrar el botón de mostrar
  hideSidebar() {
    this.isSidebarHidden = true;
  }

  // Función para mostrar la barra lateral y mostrar el botón de ocultar
  showSidebar() {
    this.isSidebarHidden = false;
  }




}
