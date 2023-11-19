//Esta interface se hace deacuardo al controlador get de liga
interface _LigaUser {
    nombre: string;
    _id: string;
    img: string;
}
// checar si se incrementaran o se eliminaran
export enum Tipojuego {
    Fut7 = "fut7",
    FutSalad = "futsalad",
    Fut11 = "fut11"
}

export enum Tipocategoria {
    Libre = "libre",
    Primarias = "primaria",
    Intersecundaria = "intersecundaria",
    Prepa = "prepa",
    Veterano =  "veterano",
    Relampago = "relampago",
    Femenil = "femenil"
}

export class Liga {

    constructor(
        public nombre:  string ,
        public img: string,
        public descripcion: string,
        public tipoCategoria:    Tipocategoria,
        public tipoJuego:        Tipojuego,
        public _id?: string,
        public usuario?: _LigaUser,
        public edadMax?: number,
        public edadMin?: number,
    ) {}

}