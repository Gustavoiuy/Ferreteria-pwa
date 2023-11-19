import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Carrusel } from '../models/carruseles.models';

@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  private baseUrl: string = environment.base_url;

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

      getCarruseles(){
        const url = `${ this.baseUrl }/carruseles`;
    
        return this.http.get< { ok: boolean, carruseles:Carrusel[] } > ( url, this.headers )
                          .pipe(
                            map( (resp: { ok: boolean, carruseles:Carrusel[] } ) => resp.carruseles )
                          )
      }

      getCarruselPorId(id: string) {
        const url = `${ this.baseUrl }/carruseles/${id}`;
          return this.http.get< { ok: boolean, carrusel:Carrusel } > ( url, this.headers )
          .pipe(
            map( (resp: { ok: boolean, carrusel:Carrusel } ) => resp.carrusel )
          )
      }

      agregarCarrusel( carrusel: Carrusel){

        const url = `${ this.baseUrl }/carruseles`;
    
        return this.http.post<Carrusel>(url, carrusel , this.headers );
      }

      actualizarCarrusel(carrusel: Carrusel){
        const url = `${ this.baseUrl }/carruseles/${carrusel._id}`;
        return this.http.put(url, carrusel , this.headers);
      }

      eliminarCarrusel( _id: string ){
        const url = `${ this.baseUrl }/carruseles/${ _id }`;
        return this.http.delete(  url,  this.headers );
      }
}
