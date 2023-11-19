import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Liga } from '../models/ligas.models';
import { Usuario } from '../models/users.models';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipos.models';
import { Jugador } from '../models/jugadores.models';

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  private baseUrl: string = environment.base_url;

  constructor(
    private http: HttpClient
  ) { }

  //obtener el el token de nuestro localstorage
  get token(): string {
    return localStorage.getItem('token') || '';
  }

get headers() {
  return {
      headers:  {
      'x-token': this.token
    }
  }
}

private transformarUsuarios( resultados: any[] ): Usuario[]{

  return resultados.map(
    user => new Usuario( user.nombre, user.apellidoP, user.apellidoM, user.email, '', user.img , user.google, user.role, user.status, user.uid  )
  );
}

private transformarLigas( resultados: any[] ): Liga[]{

  return resultados;
}

private transformarEquipos( resultados: any[] ): Equipo[]{

  return resultados;
}


private transformarProductos( resultados: any[] ): Equipo[]{

    return resultados;
  }

private transformarJugadores( resultados: any[] ): Jugador[]{

  return resultados;
}

buscar( tipo: 'usuarios' | 'ligas' | 'equipos' | 'jugadores'| 'productos' ,
        termino: string 
      ){

  const url = `${ this.baseUrl }/todo/coleccion/${ tipo }/${ termino }`
  return this.http.get<any[]>( url )
          .pipe(
            map( (resp: any ) => {

              switch(tipo){
                
                case 'usuarios':
                  return this.transformarUsuarios( resp.resultados )
                
                case 'ligas':
                  return this.transformarLigas( resp.resultados )
                  
                case 'equipos':
                  return this.transformarEquipos( resp.resultados )

                case 'jugadores':
                    return this.transformarJugadores( resp.resultados )
                case 'productos':
                    return this.transformarProductos( resp.resultados )

                default:
                  return [];
              }

            })
          );
  }

  busquedaGlobal( termino: string) {

    const url = `${ this.baseUrl }/todo/${ termino }`
    return this.http.get( url, this.headers )

  }



}
