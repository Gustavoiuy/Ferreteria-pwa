import { Component } from '@angular/core';
import { Equipo } from 'src/app/models/equipos.models';
import { BusquedasService } from 'src/app/services/busquedas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


    cargando: boolean = true;
    public equipos: Equipo[] = [];
    public equiposTemp: Equipo[] = [];
  
    
  
    constructor(
      
   
      private busquedasService: BusquedasService
    ) { }
  
  
    
  
    ngOnInit(): void {
  
     
  
     
 
  
    }

    
  buscar( termino:string ){


    if( termino.length === 0 ){

      return this.equipos = this.equiposTemp;
    }

    this.busquedasService.buscar( 'productos', termino )
            .subscribe( resultados => {

              this.equipos = resultados as Equipo[];

            });

    return true;
  }

}
