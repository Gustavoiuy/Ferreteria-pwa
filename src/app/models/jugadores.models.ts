// import { Liga } from './ligas.models';
import { Equipo } from './equipos.models';
//Esta interface se hace deacuardo al controlador get de hospitales
interface _LigaUser {
    nombre: string;
    _id: string;
    img: string;
}

export class Jugador {

    constructor(
        public nombre:  string ,
        public apellidoP: string,
        public apellidoM: string,
        public curp: string,
        public img?: string,
        public _id?: string,
        public usuario?: _LigaUser,
        //Se puede importar el modelo pero solo si trae los mismos datos al usar el get
        // public liga?: Liga,
        //Se puede importar el modelo pero solo si trae los mismos datos al usar el get
        public equipo?: Equipo
    ) {}

    
}