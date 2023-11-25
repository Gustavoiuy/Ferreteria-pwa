import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LigasService } from 'src/app/services/ligas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
    mostrarProduct : boolean = false;
    mostrarProductos : boolean = false;
    product: any = {}; // Modelo para almacenar los datos del producto

    constructor( private ligaService: LigasService,
            private http: HttpClient) {}
  
    onSubmit() {
      // Envía la solicitud POST para crear el producto
      this.ligaService.agregarLiga(this.product).subscribe(
        (response) => {
          console.log('Producto creado:', response);
          Swal.fire(
            'Creado!',
            `${ this.product.nombre } fue creado correctamente`,
            'success'
          )
          
      this.mostrarProductos = true

      this.mostrarProduct = false;
          //location.reload();

          this.enviarNotificacion().subscribe(
            () => {
              console.log('Notificación enviada con éxito');
            },
            (error) => {
              console.error('Error al enviar la notificación:', error);
            }
          );
        },
        (error) => {
          console.error('Error al crear el producto:', error);
        }
      );
      
      
    }


    agregarProductos(){
        this.mostrarProduct = true;
       
    }
    private enviarNotificacion() {
        const notificacionData = {
           
        };
        const apiUrl = 'http://localhost:9000/api/enviar'; // Reemplaza con la URL correcta de tu servidor
      
        return this.http.post(apiUrl, notificacionData);
      }
}
