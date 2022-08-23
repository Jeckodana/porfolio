export class Educacion {
    id?: number;
    titulo: String;
    institucion: String;
    periodo: String;
    logo_institucion: String;

    constructor(titulo:String, institucion: String, periodo:String, logo_institucion:String){
        this.titulo = titulo
        this.institucion = institucion
        this.periodo = periodo
        this.logo_institucion = logo_institucion

    }
}
