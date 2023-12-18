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
    mostrarComentarios: boolean = true;
    comentarios: Comentario[] = [];
    nuevoComentario: Comentario = { id: "0", autor: '', contenido: '' };
  
    mostrarProduct: boolean=false;
    mostrarPerfil: boolean = false;
    cargando: boolean = true;
    public ligas: any[] = [
    {
        titulo: 'ENERO',
        img: '../../../../assets/GYM.jpeg'
    },
    {
        titulo: 'FEBRERO',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'MARZO',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'ABRIL',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'MAYO',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'JUNIO',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'JULIO',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'AGOSTO',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'SEPTIEMBRE',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'OCTUBRE',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'NOVIEMBRE',
        img: '../../../../assets/cuento.jpeg'
    },
    {
        titulo: 'DICIEMBRE',
        img: '../../../../assets/cuento.jpeg'
    },
    

    ];
    public ligasTemp: any[] = [];
    private imgSubs!: Subscription;


    constructor( private ligaService: LigasService,
        private comentarioService: ComentarioService,
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
       
      }


   
    
}
