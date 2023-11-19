
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Liga } from '../../../models/ligas.models';
import { LigasService } from '../../../services/ligas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import { BusquedasService } from 'src/app/services/busquedas.service';
import Swal from 'sweetalert2';

import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

    mostrarProduct: boolean=false;
    mostrarPerfil: boolean = false;
    cargando: boolean = true;
    public ligas: Liga[] = [];
    public ligasTemp: Liga[] = [];
  
    private imgSubs!: Subscription;
  
    constructor(
      private ligaService: LigasService,
      private modalImagenService: ModalImagenService,
      private busquedasService: BusquedasService
    ) { }
  
  
    ngOnDestroy(): void {
      this.imgSubs.unsubscribe();
    }
  
    ngOnInit(): void {
      this.cargarLigas();
  
      this.imgSubs = this.modalImagenService.nuevaImagen
          .pipe(delay(100))
          .subscribe( img => this.cargarLigas() );
  
    }

    agregarProductos(){
        this.mostrarProduct = true;
        this.mostrarPerfil = true
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
  
    abrirModal( liga: Liga ){
      this.modalImagenService.abrirModal( 'ligas', liga._id!, liga.img )
    }
  
    buscar( termino:string ){
  
      if( termino.length === 0 ){
  
        return this.ligas = this.ligasTemp;
      }
  
      this.busquedasService.buscar( 'productos', termino )
              .subscribe( resultados => {
  
                this.ligas = resultados as Liga[];
              
              });
  
      return true;
    }
  
  
    borrarLiga( liga: Liga ){
  
      Swal.fire({
        title: '¿Borrar producto?',
        text: `Esta a punto de borrar !`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, borrarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            //cambiar liga
          this.ligaService.desactivarLiga( liga )
              .subscribe( () => {
  
                this.cargarLigas();
  
                Swal.fire(
                  'Eliminado!',
                  `${ liga.nombre } fue eliminado correctamente`,
                  'success'
                )
  
              });
  
          
        }
      });
  
  
    }
  
}
