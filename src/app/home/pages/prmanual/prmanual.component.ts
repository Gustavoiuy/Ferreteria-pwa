import { Component } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { LigasService } from 'src/app/services/ligas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';

@Component({
  selector: 'app-prmanual',
  templateUrl: './prmanual.component.html',
  styleUrls: ['./prmanual.component.css']
})
export class PrmanualComponent {


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
