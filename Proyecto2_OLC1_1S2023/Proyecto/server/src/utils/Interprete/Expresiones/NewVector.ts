import Errores from "../Ast/Errores";
import Nodo from "../Ast/Nodo";
import Controlador from "../Controlador";
import Primitivo from "../Expresiones/Primitivo";
import { Retorno } from "../Interfaces/Retorno";
import { Expression } from "../Interfaces/Expression";
import { Instruccion } from "../Interfaces/Instruccion";
import Simbolo from "../TablaSimbolos/Simbolo";
import{ Array } from "../TablaSimbolos/Array";
import { Environment } from "../TablaSimbolos/Environment";
import Tipo, { tipo } from "../TablaSimbolos/Tipo";
export class NewVector extends Expression{

    constructor(private typeDeclaration: number, private typeVector: Tipo, private listExpr: [Expression], line: number, column: number) {
        super(line, column);
        console.log(this.typeDeclaration);
    }
    public execute(environment: Environment): Retorno {
        const array = new Array();
        if (this.typeDeclaration == 1) {
            let index = 0;
            let typeR = 0;

            this.listExpr.forEach((expr) => {
                const value = expr.execute(environment);
                typeR = value.type
                array.setAttribute(index++, new Simbolo (5,value.value, '',value.type,0,0));
            });
            return { value: array, type: typeR };
        }else { if (this.listExpr.length == 1) { //Vector de una dimension con valores default Simbolo(5,this.typeVector,"",defaultValue,0,0));


            const value = this.listExpr[0].execute(environment)
            if (value.type == tipo.ENTERO) {

                const defaultValue = this.defaultValue(this.typeVector.gettipo())
                for (let i = 0; i < value.value; i++) {

                    array.setAttribute(i, new Simbolo(5,this.typeVector,"",defaultValue,0,0));
                }

            } else {
             //   errores.push(new Error_(this.line, this.column, 'Semántico', `Vector: Valor de la expresion no valido no es de tipo '${Type[Type.NUMBER]}'.`))
            }

        } else if (this.listExpr.length == 2) { //Vector de una dimension con valores default Simbolo(5,this.typeVector,"",defaultValue,0,0));

            let index = 0;
            this.listExpr.forEach((expr) => {
                const value = expr.execute(environment);

                const defaultValue = this.defaultValue(this.typeVector.gettipo())
                const arrayTmp = new Array();

                for (let i = 0; i < value.value; i++) {
                    arrayTmp.setAttribute(i, new Simbolo(5,this.typeVector,"",defaultValue,0,0));
                }
                array.setAttribute(index++, new Simbolo(5, this.typeVector, '',arrayTmp,0,0));

            });

        } else {
          //  errores.push(new Error_(this.line, this.column, 'Semántico', `Vector: Valor de la expresion no valido.`))
        }

        return { value: array, type: this.typeVector.gettipo() };
    }
}


defaultValue(type: number): any {

    let value: any;
    if (type == tipo.ENTERO)
        value = 0
    else if (type == tipo.BOOLEANO)
        value = false
    else if (type == tipo.DOBLE)
        value = 0.0
    else if (type == tipo.CARACTER)
        value = ''
    else if (type == tipo.CADENA)
        value = ""

    return value
}
}