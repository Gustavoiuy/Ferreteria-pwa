import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
    private baseUrl = environment.base_url;

  constructor(private http: HttpClient) {}

  obtenerComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.baseUrl}/comentarios`);
  }

  agregarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(`${this.baseUrl}/comentarios`, comentario);
  }
}
