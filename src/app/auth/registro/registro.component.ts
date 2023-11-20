import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/preguntas.models';
import { EmailValidatorService } from '../validators/email-validator.service';
import { ValidatorService } from '../validators/validator.service';
import Swal from 'sweetalert2';

import { UsuarioService } from '../services/usuario.service';

declare const google: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn!: ElementRef;

  public preguntas: Pregunta[] = [];

  public formSubmitted = false;

  miFormulario: FormGroup = this.fb.group({
    nombre:       [ '' ,   [Validators.minLength(2),Validators.required,Validators.pattern(this.vS.nombresPattern)]  ],
    apellidoP:    [ '' ,   [Validators.required, Validators.minLength(3),Validators.pattern(this.vS.nombresPattern)]  ],
    apellidoM:    [ '' ,   [Validators.required, Validators.minLength(3),Validators.pattern(this.vS.nombresPattern)]  ],
    password:     [ '' ,   [Validators.required, Validators.pattern( this.vS.passPattern ) ]  ],
    password2:    [ '' ,   [Validators.required ]        ],
    pregunta:     [ '' ,   [Validators.required ]        ],
    respuesta:    [ '' ,   [Validators.required,  Validators.minLength(3) ]        ],
    email:        [ '' ,   [Validators.required, Validators.pattern( this.vS.emailPattern ) ], [ this.emailValidator ]  ],
    condiciones:  [ false , Validators.requiredTrue]
  }, {

    //Para realizar estas validaciones
    //Se necesita leer a tiempo real los campos a utilizar
    validators: [   this.vS.camposIguales('password', 'password2') ]

  });

  inicializador = {
    nombre:      'test1',
    apellidoP:    'test1',
    apellidoM:    'test1',
    password:        'Rosa123',
    password2:       'Rosa123',
    email:      'test1@gmail.com',
    condiciones: false
  }


  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    //SERVICIO DE VALIDACIONES
    private vS: ValidatorService,
    //SERVICIO PARA VALIDAR EL EMAIL DE LA BD FALTA
    private emailValidator: EmailValidatorService,

    private router: Router,
    private usuarioService: UsuarioService,
    private ngZone: NgZone,
   

  ) { }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  googleInit(){
    google.accounts.id.initialize({
      client_id: "597820303932-nc7dmt1ceaad8p4s65h6sjas6daqn6lc.apps.googleusercontent.com",
      callback: (response:any) =>  this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
        // document.getElementById("buttonDiv"),
        this.googleBtn.nativeElement,
        { theme: "outline", size: "medium" } // customization attributes
    );
  }

  handleCredentialResponse( response: any ){
    // console.log("Encoded JWT ID token: " + response.credential);
    this.usuarioService.loginGoogle( response.credential )
              .subscribe( resp => {
                // console.log({ login: resp });

                //navegar al inicio gestor
                this.ngZone.run( () => {
                  this.router.navigateByUrl('gestor/inicio');
                } )
              } )
  }

  ngOnInit(): void {

    this.miFormulario.reset( {  ...this.inicializador  } );
 

  }

  

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.['required']  ){
      return 'El correo es obligatorio';
    }else if( errors?.['pattern'] ){
      return 'No es un formato de correo valido';
    }else if( errors?.['emailTomado'] ){
      return 'El correo electronico ya existe';
    }

    return '';

  }

  get passErrorMsg(): string {

    const errors = this.miFormulario.get('password')?.errors;
    if( errors?.['required']  ){
      return 'La contraseña es obligatoria';
    }else if( errors?.['pattern'] ){
      return 'La contraseña debe de ser mayor a 5 caracteres. tener mayusculas, minusculas y numeros';
    }

    return '';

  }




  campoNoEsValido(campo: string){
    return this.miFormulario.controls[campo]?.errors
    && this.miFormulario.controls[campo].touched
  }


  guardar(){
    this.formSubmitted = true;
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

      //Desestructuro el objeto para quitarle el pass2 y mandarlo
      const formValue = { ...this.miFormulario.value }
      delete formValue.password2;
      delete formValue.condiciones;
      //Eliminado lo mando
      console.log(formValue);

    this.usuarioService.crearUsuario( formValue )
      .subscribe(
        {
          next: () => {

            //navegar al gestor
            this.router.navigateByUrl('/inicio');
          },
          error: err => {
            Swal.fire('Error', err.error.msg , 'error');
          }
      });

    this.router.navigateByUrl('/inicio');
    this.miFormulario.reset();
  }

  mostrarSnackbar(mensaje: string){

    this.snackbar.open(mensaje, 'ok!',  {
      duration: 5000,
      panelClass: ['blue-snackbar']
    });

  }

  aceptaTerminos(){
    return !this.miFormulario.get('condiciones')?.value && this.formSubmitted;
  }


}
