export class Skills{
    id?: number;
    habilidad: String;
    nivel: number;
    detalle: String;

    constructor(habilidad: String, nivel: number, detalle: String){
        this.habilidad = habilidad;
        this.nivel = nivel;
        this.detalle = detalle;
    }

}