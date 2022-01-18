export interface Brigadista {
    id:number;
    numerodecuenta:string;
    name:string;
    apellido1:string;
    apellido2:string;
    ciclo:string;
    status:string;
    correo:string;
    telefono:string;
    carrera:string;
    unidadacademica:string;
    proyecto:string;
    departamento:string;
    dependencia:string;
    unidadreceptora:string;
    inicio:Date;
    fin:Date;
    documento:string;
    numerodeinforme:string;


}
export interface Prebrigadista {
    id:number;
    numerodecuenta:string;
    apellido1:string;
    apellido2:string;
    ciclo:string;
    status:string;
    correo:string;
    telefono:string;
    carrera:string;
    unidadacademica:string;    
}
export interface DataTag {
    
    name:string;    
}