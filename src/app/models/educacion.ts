export class Educacion {
    id?: number;
    titulo: String;
    institucion: String;
    periodo: String;
    url_logo_institucion: String;

    constructor(titulo:String, institucion: String, periodo:String, url_logo_institucion:String){
        this.titulo = titulo
        this.institucion = institucion
        this.periodo = periodo
        this.url_logo_institucion = url_logo_institucion

    }
}
