export class Experiencia {
    id?: number;
    puesto: String;
    empresa: String;
    fecha_fin: String;
    fecha_inicio: String;
    actividades: String;
    logo_empresa: String;

    constructor(puesto:String, empresa: String, fecha_inicio:String, fecha_fin: String, actividades: String, logo_empresa:String){
        this.puesto = puesto
        this.empresa = empresa
        this.fecha_inicio = fecha_inicio
        this.fecha_fin = fecha_fin
        this.actividades = actividades
        this.logo_empresa = logo_empresa

    }
}