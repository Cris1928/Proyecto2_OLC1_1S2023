import { lista_errores } from "./Lista_Errores";
let v=true;
export default class Errores{

    public tipo : string;
    public descripcion : string;
    public linea : number;
    public columna : number;

    constructor(tipo: string, descripcion:string, linea:number, columna:number) {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.linea = linea;
        this.columna = columna;
        if(tipo == "Sintactico" || tipo == "Lexico"){
           // lista_errores.Errores.push(this);
            lista_errores.Errores.forEach(element => {
               // console.log(element);
               if(element.columna == columna && element.linea == linea){
                    v=false;
               }
            });
            if(v){
                lista_errores.Errores.push(this);
            }
            v=true;
        



        }
      // console.log(lista_errores.Errores);
    }
}