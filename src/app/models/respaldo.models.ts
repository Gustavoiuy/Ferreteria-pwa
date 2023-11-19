export interface Welcome {
  ok:      boolean;
  msg:     string;
  usuario: Respaldo | Restaurar;
}

 export interface Respaldo {
  nombre:    string;

  accion:    string;
  fecha:     string;
  Hora?:      string;
}
export interface Restaurar {
  nombre:    string;

  accion:    string;
  fecha:     string;
  Hora?:      string;
}
