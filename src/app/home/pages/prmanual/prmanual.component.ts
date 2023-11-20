import { Component } from '@angular/core';
import { Subscription, delay } from 'rxjs';
import { Comentario } from 'src/app/models/comentario.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ComentarioService } from 'src/app/services/comentario.service';
import { LigasService } from 'src/app/services/ligas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';

@Component({
  selector: 'app-prmanual',
  templateUrl: './prmanual.component.html',
  styleUrls: ['./prmanual.component.css']
})
export class PrmanualComponent {

    comentarios: Comentario[] = [];
    nuevoComentario: Comentario = { id: 0, autor: '', contenido: '', fecha: new Date() };
  
    mostrarProduct: boolean=false;
    mostrarPerfil: boolean = false;
    cargando: boolean = true;
    public ligas: any[] = [];
    public ligasTemp: any[] = [];
    private imgSubs!: Subscription;


    constructor( private ligaService: LigasService,
        private comentarioService: ComentarioService,
        private modalImagenService: ModalImagenService,
        private busquedasService: BusquedasService){

    }

    ngOnInit(): void {
        this.obtenerComentarios();
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


      obtenerComentarios() {
        this.comentarioService.obtenerComentarios().subscribe(
          (comentarios) => {
            this.comentarios = comentarios;
          },
          (error) => {
            console.error('Error al obtener comentarios', error);
          }
        );
      }
    
      agregarComentario() {
        this.comentarioService.agregarComentario(this.nuevoComentario).subscribe(
          (comentario) => {
            this.comentarios.push(comentario);
            this.nuevoComentario = { id: 0, autor: '', contenido: '', fecha: new Date() };
          },
          (error) => {
            console.error('Error al agregar comentario', error);
          }
        );
      }
}
