import { Component } from '@angular/core';
import { LigasService } from 'src/app/services/ligas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
    mostrarProduct : boolean = false;
    product: any = {}; // Modelo para almacenar los datos del producto

    constructor( private ligaService: LigasService,) {}
  
    onSubmit() {
      // Envía la solicitud POST para crear el producto
      this.ligaService.agregarLiga(this.product).subscribe(
        (response) => {
          console.log('Producto creado:', response);
          // Puedes redirigir a otra página o realizar otras acciones después de crear el producto.
        },
        (error) => {
          console.error('Error al crear el producto:', error);
        }
      );
    }


    agregarProductos(){
        this.mostrarProduct = true;
        
    }
}
