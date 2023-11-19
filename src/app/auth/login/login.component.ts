import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidatorService } from '../validators/validator.service';


import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public formSubmitted = false;

  miFormulario: FormGroup = this.fb.group({
    email:    [ localStorage.getItem('email') || '' , [Validators.required, Validators.pattern( this.vs.emailPattern ) ], ],
    password: [ '', Validators.required ],
    remember: [false]
  });

  constructor(
    private  router: Router,
    private fb: FormBuilder,
    private vs: ValidatorService,
    private usuarioService: UsuarioService,
    private ngZone: NgZone
  ) { }

  ngAfterViewInit(): void {
   
  }



  ngOnInit(): void {
    
  }

  get emailErrorMsg(): string {
    
    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.['required']  ){
      return 'El correo es obligatorio';
    }else if( errors?.['pattern'] ){
      return 'No es un formato de correo valido';
    }

    return '';
  
  }

  campoNoEsValido(campo: string){
    return this.miFormulario.controls[campo]?.errors 
    && this.miFormulario.controls[campo].touched 
  }

  login(){

    this.usuarioService.login( this.miFormulario.value )
      .subscribe(
        {

          next: () => {

            if( this.miFormulario.get('remember')?.value ){
              //Si el usuario gusta que se recuerde su cuenta
              localStorage.setItem('email', this.miFormulario.get('email')?.value);
            }else{
              localStorage.removeItem('email');
            }
    
            //navegar al gestor
            this.router.navigateByUrl('gestor/inicio');

          },
          error: err => {
            // si sucede un error
            Swal.fire('Error', err.error.msg, 'error');  
          }

      });
    
  }

}
