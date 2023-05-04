
import { Environment } from "../TablaSimbolos/Environment";
import Tipo, { tipo }from "../TablaSimbolos/Tipo";
import { tipos, types_pot_module } from "../TablaSimbolos/TablaTipos"
import { Retorno } from "./Retorno";

export abstract class Expression {

    public line: number;
    public column: number;

    constructor(line: number, column: number) {
        this.line = line;
        this.column = column;
    }

    public abstract execute(environment: Environment): Retorno;

    public tipoDominante(type_1: tipo, type_2: tipo, typeResult: number):tipo {

        let type: any;

        if (typeResult === 1)
            type = tipos[type_1][type_2];
        else if (typeResult === 2)
            type = types_pot_module[type_1][type_2];
        return type;

    }


}

