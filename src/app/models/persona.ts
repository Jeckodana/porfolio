export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    foto_perfil: String;
    info_profesional: String;

    constructor( nombre: String, apellido: String, foto_perfil: String, info_profesional: String) { 
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto_perfil = foto_perfil;
        this.info_profesional = info_profesional;
    }

   
}