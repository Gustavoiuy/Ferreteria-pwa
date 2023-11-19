import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { GestorRoutingModule } from './gestor-routing.module';
import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';


import { AdminComponent } from './pages/admin/admin.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    
         AdminComponent,
         PerfilComponent,
         ProductosComponent,
         DetalleComponent,
         UsuariosComponent
         

    
  ],
  imports: [
    CommonModule,
    GestorRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
  
  ]
})
export class GestorModule { }
