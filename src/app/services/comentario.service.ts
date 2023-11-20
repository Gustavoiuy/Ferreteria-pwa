import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private apiUrl = 'tu_url_de_api';

  constructor(private http: HttpClient) {}

  obtenerComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.apiUrl}/comentarios`);
  }

  agregarComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(`${this.apiUrl}/comentarios`, comentario);
  }
}
