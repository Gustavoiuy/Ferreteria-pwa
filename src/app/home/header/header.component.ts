import { Component, Input } from '@angular/core';
import { Equipo } from 'src/app/models/equipos.models';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   
    public modal: boolean = false;
    cargando: boolean = true;
    public equipos: Equipo[] = [];
    public equiposTemp: Equipo[] = [];
  
    showNav: boolean = false;

    toggleNav() {
      this.showNav = !this.showNav;
    }
  
    constructor(
      
        private modalService: ModalService,
      private busquedasService: BusquedasService
    ) { }
  
  
    
  
    ngOnInit(): void {
  
        this.modalService.modal$.subscribe((value) => {
            this.modal = value;
          });
     
  
    }

    
  buscar( termino:string ){


    if( termino.length === 0 ){
        this.modalService.setModal(false);
      return this.equipos = this.equiposTemp;
    }

    this.busquedasService.buscar( 'productos', termino )
            .subscribe( resultados => {

              this.equipos = resultados as Equipo[];

            });
            this.modalService.setModal(true);
    return true;
  }

}
