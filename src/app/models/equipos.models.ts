import { Liga } from './ligas.models';
//Esta interface se hace deacuardo al controlador get de hospitales
interface _LigaUser {
    nombre: string;
    _id: string;
    img: string;
}

export class Equipo {

    constructor(
        public nombre:  string ,
        public descripcion: string,
        public img: string,
        public _id?: string,
     
        //Se puede importar el modelo pero solo si trae los mismos datos al usar el get
       
    ) {}


}
