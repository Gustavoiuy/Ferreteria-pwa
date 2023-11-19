//Esta interface se hace deacuardo al controlador get de liga
interface _CarruselUser {
    nombre: string;
    _id: string;
    img: string;
}

export class Carrusel {

    constructor(
        public nombre: string,
        public img?: string,
        public _id?: string,
        public usuario?: _CarruselUser,
    ) {}

    
}