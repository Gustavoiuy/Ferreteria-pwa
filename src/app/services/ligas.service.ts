import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

import { environment } from 'src/environments/environment';
import { Liga } from '../models/ligas.models';
import { Jugador } from '../models/jugadores.models';

@Injectable({
  providedIn: 'root'
})
export class LigasService {

  private baseUrl: string = environment.base_url;
  
  private _categorias: string[] = ['libre', 'primaria', 'intersecundaria', 'prepa', 'veterano', 'relampago','femenil'];
  private _juegos: string[] = ['fut7', 'futsalad', 'fut11'];

  get categorias():string[]{
    //pasamos el arreglo desestructurado para que no se puedan hacer modificaciones
    return [...this._categorias]
  }

  get juegos():string[]{
    //pasamos el arreglo desestructurado para que no se puedan hacer modificaciones
    return [...this._juegos]
  }

  constructor(
    private http:HttpClient  
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




  getLigas(){
    const url = `${ this.baseUrl }/productos`;

    return this.http.get< { ok: boolean, productos:any[] } > ( url)
                      .pipe(
                        map( (resp: { ok: boolean, productos:any[] } ) => resp.productos )
                      )
  }

  getLigasStatusTrue(){
    const url = `${ this.baseUrl }/ligas/statusTrue`;

    return this.http.get< { ok: boolean, ligas:Liga[] } > ( url, this.headers )
                      .pipe(
                        map( (resp: { ok: boolean, ligas:Liga[] } ) => resp.ligas )
                      )
  }

  getLigasStatusFalse(){
    const url = `${ this.baseUrl }/ligas/statusFalse`;

    return this.http.get< { ok: boolean, ligas:Liga[] } > ( url, this.headers )
                      .pipe(
                        map( (resp: { ok: boolean, ligas:Liga[] } ) => resp.ligas )
                      )
  }


  smallgetLigas(){
    const url = `${ this.baseUrl }/ligas?limite=3`;

    return this.http.get< { ok: boolean, ligas:Liga[] } > ( url, this.headers )
                      .pipe(
                        map( (resp: { ok: boolean, ligas:Liga[] } ) => resp.ligas )
                      )
  }

  getLigaPorId(id: string) {
    const url = `${ this.baseUrl }/ligas/${id}`;
      return this.http.get< { ok: boolean, liga:Liga } > ( url, this.headers )
      .pipe(
        map( (resp: { ok: boolean, liga:Liga } ) => resp.liga )
      )
  }



  getLigaPorBusqueda(termino: string){
    
    
      return this.http.get<Liga[]>(`${ this.baseUrl }/ligas/nombre/${ termino }?limite=6`);
  }



  agregarLiga( liga: any){

    const url = `${ this.baseUrl }/productos`;

    return this.http.post(url, liga  );
  }

  actualizarLiga(liga: Liga){
    const url = `${ this.baseUrl }/ligas/${liga._id}`;
    return this.http.put(url, liga , this.headers);
  }

  desactivarLiga( liga: Liga ){
    const url = `${ this.baseUrl }/ligas/desactivar/${liga._id}`;
    const desactivar = {
      status: false 
    };

    return this.http.put(url, desactivar , this.headers);
  }

  activarLiga( liga: Liga ){
    const url = `${ this.baseUrl }/ligas/desactivar/${liga._id}`;
    const activar = {
      status: true 
    };

    return this.http.put(url, activar , this.headers);
  }




  //trejo arreglar la paginacion
  // getSugerencias( termino: string ): Observable<Liga[]> {
  //   return this.http.get<Liga[]>(`${ this.baseUrl }/ligas?q=${ termino }&_limit=5`);
  // }

  //Funcion que me devolvera los tipos de juego y las categorias
  getCategoriasJuegos(){
    return this.getLigas()
      .pipe(
        map(  ligas => {
            let cat = ligas.map( ({...ligas}) =>  ligas.tipoCategoria );
            let jue = ligas.map( ({...ligas}) =>  ligas.tipoJuego );
            cat = [...new Set(cat)];
            jue = [...new Set(jue)];
            return {cat,jue}
        })
      )
  }


  getJugadores(){
    const url = `${ this.baseUrl }/jugadores`;

    return this.http.get< { ok: boolean, jugadores:Jugador[] } > ( url, this.headers )
                      .pipe(
                        map( (resp: { ok: boolean, jugadores:Jugador[] } ) => resp.jugadores )
                      )
  }
}