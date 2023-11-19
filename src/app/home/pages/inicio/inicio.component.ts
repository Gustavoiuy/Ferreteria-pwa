import { Component } from '@angular/core';
import { Liga } from 'src/app/models/ligas.models';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { LigasService } from 'src/app/services/ligas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { Subscription, delay } from 'rxjs';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

    mostrarProduct: boolean=false;
    mostrarPerfil: boolean = false;
    cargando: boolean = true;
    public ligas: any[] = [];
    public ligasTemp: any[] = [];
    private imgSubs!: Subscription;
  
      

    

    constructor( private ligaService: LigasService,
        private modalImagenService: ModalImagenService,
        private busquedasService: BusquedasService){

    }

    ngOnInit(): void {
        this.cargarLigas();
    
        this.imgSubs = this.modalImagenService.nuevaImagen
            .pipe(delay(100))
            .subscribe( img => this.cargarLigas() );
    
      }
      cargarLigas(){
        this.cargando = true;
        this.ligaService.getLigas()
              .subscribe( ligas => {
                this.cargando = false;
                this.ligasTemp = ligas ;
                
                this.ligas = ligas;
              } )
      }
}
