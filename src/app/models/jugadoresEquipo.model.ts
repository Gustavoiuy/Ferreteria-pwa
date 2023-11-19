export interface JugadoresPorEquipo {
    ok:        boolean;
    jugadores: Jugadore[];
}

export interface Jugadore {
    status:    boolean;
    _id:       string;
    usuario:   string;
    nombre:    string;
    apellidoP: string;
    apellidoM: string;
    curp:      string;
    equipo:    string;
    img:       string;
}
