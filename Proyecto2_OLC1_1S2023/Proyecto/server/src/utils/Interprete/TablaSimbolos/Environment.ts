import Tipo, { tipo } from "../TablaSimbolos/Tipo";
import Simbolo from "./Simbolo";

import  Funcion  from "../Instrucciones/Funcion";

export class Environment {

 

    private variables: Map<string, Simbolo>; //La clase simbolo tiene un id, valor y un tipo
    public funciones: Map<string, Funcion>;

    constructor(public anterior: Environment | null) {
        this.variables = new Map();
        this.funciones = new Map();
    }

    public guardar(id: string, valor: any, type: Tipo) {
        let env: Environment | null = this;
        while (env != null) {
            if (env.variables.has(id)) {
                env.variables.set(id, new Simbolo(5,type, id ,valor,0,0));
                return;
            }
            env = env.anterior;
        }
        this.variables.set(id, new Simbolo(5,valor, id, type,0,0));
    }

    public saveVar(nombre: string, valor: any, type: Tipo): boolean {

        if (!this.searchVar(nombre)) {
            this.variables.set(nombre, new Simbolo(5,type, nombre ,valor,0,0));
            return true
        }
        return false
    }

    public searchVar(nombre: string): boolean {
        for (const entry of Array.from(this.variables.entries())) {
            if (entry[0] == nombre) return true;
        }
        return false
    }


    public getVar(id: string): Simbolo | undefined | null {
        let env: Environment | null = this;
        while (env != null) {
            if (env.variables.has(id)) {
                return env.variables.get(id);
            }
            env = env.anterior;
        }
        return null;
    }

    public getGlobal(): Environment {
        let env: Environment | null = this;
        while (env?.anterior != null) {
            env = env.anterior;
        }
        return env;
    }

    public actualizar_variable(nombre: string, new_valor: any) {

        let env: Environment | null = this;
        while (env != null) {
            if (env.variables.has(nombre)) {

                for (let entry of Array.from(env.variables)) {
                    if (entry[0] === nombre) {
                        entry[1].valor = new_valor;
                    }
                }
            }
            env = env.anterior;
        }
        return null;
    }

    public getEnv() {
        return this.variables
    }

    public get_variable(nombre: string): Simbolo | undefined | null {
        let env: Environment | null = this;
        while (env != null) {
            if (env.variables.has(nombre)) return env.variables.get(nombre);
            env = env.anterior;
        }
        return null;
    }

    public getVars(): any {
        let st = []
        for (const entry of Array.from(this.variables.entries())) {
            st.push({ name: entry[1].identificador, value: entry[1].valor, type: tipo[entry[1].tipo.gettipo()] })
        }
        return st
    }

    public guardarFuncion(id: string, Funcion: Funcion) {
        //TODO ver si la funcion ya existe, reportar error
        this.funciones.set(id, Funcion);
    }

    public getFuncion(id: string): Funcion | undefined {

        let env: Environment | null = this;
        while (env != null) {
            if (env.funciones.has(id)) {
                return env.funciones.get(id);
            }
            env = env.anterior;
        }
        return undefined;
    }

}
