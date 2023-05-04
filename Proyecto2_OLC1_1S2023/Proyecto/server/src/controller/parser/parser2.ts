import { Response, Request } from "express";

import AST from '../../utils/Interprete/Ast/Ast'
import Nodo from '../../utils/Interprete/Ast/Nodo'
import Controlador from "../../utils/Interprete/Controlador"
import TablaSimbolos from "../../utils/Interprete/TablaSimbolos/TablaSimbolos"
import Errores from "../../utils/Interprete/Ast/Errores";
import { lista_errores } from "../../utils/Interprete/Ast/Lista_Errores";

export const parse2 = (req: Request & unknown, res: Response): void => {
    
    var interprete = require('../../utils/Analizador/interprete').parser;
    const { peticion } = req.body

    let grafo = 'digraph {\nnode00[label = \"SALE\"];\nnode00 -> node000\nnode003[label = \"EN\"];\nnode00 -> node001\nnode000[label = \"(\"];\nnode00 -> node003\nnode001[label = \"VACAS\"];\nnode00 -> node002\nnode002[label = \")\"];\n}'
    try {
        let ast: AST = interprete.parse(peticion)
        let respuesta = "";
        let controlador = new Controlador()
        let ts_global = new TablaSimbolos(null);

        ast.ejecutar(controlador, ts_global)
        let ts_html = controlador.graficar_ts(controlador, ts_global)
        let ts_html_error = controlador.errores
       // console.log("--------aqui-------",ts_html_error)
        
    
        let nodo_ast : Nodo = ast.recorrer()
        grafo = nodo_ast.GraficarSintactico();
       //aquiiiiii console.log("---------lista errores de muestra             "+JSON.stringify(lista_errores.Errores));
        //console.log(TablaSimbolos.MostrarTabla());

        res.json({ consola: controlador.consola, errores: ts_html_error, grafito: grafo, erroresL: lista_errores,  tablaSimbolos: ts_html })
        
    } catch (err) { 
        res.json({consola: "Ocurrió un error", error: err, grafito: grafo})
    }
  
}       