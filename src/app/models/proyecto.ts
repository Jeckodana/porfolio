export class Proyecto{
    id?: number;
    nombre_proyecto: String;
    descripcion: String;
    foto_proyecto: String;
    fecha_fin: String;
    link_evidencia: String;

    constructor(nombre_proyecto: String, descripcion: String, foto_proyecto:String, fecha_fin: String, link_evidencia: String){
        this.nombre_proyecto = nombre_proyecto;
        this.descripcion = descripcion;
        this.foto_proyecto = foto_proyecto;
        this.fecha_fin = fecha_fin;
        this.link_evidencia = link_evidencia;
    }
}