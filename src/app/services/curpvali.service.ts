import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatosCURP } from '../models/curp';

@Injectable({
    providedIn: 'root'
})
// c mio
// f47db867-e9cc-412f-8be7-fed7b0b86b86 solf
// VEAF020730HHGGLRA9 mi cuurp
export class CurpvaliService {
    private apiUrl = 'https://api.valida-curp.com.mx/curp/obtener_datos/?token=f47db867-e9cc-412f-8be7-fed7b0b86b86&curp=';

    constructor(private http: HttpClient) { }

    obtenerDatosCURP(curp: string): Observable<DatosCURP> {
        const url = this.apiUrl + curp;
       
        return this.http.get<DatosCURP>(url);
       
    }
}