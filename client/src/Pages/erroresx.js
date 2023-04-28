import React, { useState } from "react";
import '../Styles/index.css'
import Navbar from "../Components/Navbar";
import Editor2 from "../Components/Editor2";
//import Editor from "../Components/Editor";
import Service from "../Services/Service";
import Errores from "../Components/Errores";
//let {Lista_Errores} = require('../../server/src/utils/Interprete/Ast/Lista_Errores');

//import  "C:\\Users\\USER\\Desktop\\Proyecto\\server\\src\\utils\\Interprete\\Ast\\Lista_Errores.ts"; 
//import lista_errores from "..../server/src/utils/Interprete/Ast/Lista_Errores.ts";
import { Graphviz } from 'graphviz-react';
  
function ERR() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [arr, setArr] = useState([]);
  const [arbolito, setArbolito] = useState("digraph {\nnode00[label = \"SALE\"];\nnode00 -> node000\nnode003[label = \"EN\"];\nnode00 -> node001\nnode000[label = \"(\"];\nnode00 -> node003\nnode001[label = \"VACAS\"];\nnode00 -> node002\nnode002[label = \")\"];\n}");

  const changeText = (valueA) => {
    setValue(valueA);
  };
  const handlerPostParse = () => {
    //alert(value)
    Service.parse(value).then((response) => {
      setResponse(response.consola);
    });

    Service.parse(value).then((response) => {
      setArbolito(response.grafito.toString());
      console.log("------------------ aquyi un arbolito"+arbolito)
    });

    Service.parse(value).then((response) => {
      setArr(response.errores);
     console.log("------muestra eerror"+response.errores);
    });

  };

  const handlerClear = () => {
    setResponse("");
  };

  const buttonTraducir = (
    <button
      type="button"
      class="btn btn-dark btn-hola"
      onClick={handlerPostParse}
    >
      Traducir
    </button>
  );
  //const buttonVivo = <button type="button" class="btn btn-outline-warning" onClick={handlerGetServerInfo}>Traducir</button>
  const buttonLimpiar = (
    <button type="button" class="btn btn-dark btn-hola" onClick={handlerClear}>
      Limpiar
    </button>
  );

  



  return (
    <>
      <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Editor2

                        value={value}
                        changeText={changeText}
                        buttonTraducir={buttonTraducir}
                        buttonLimpiar={buttonLimpiar}
                    />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <Errores

                                response={response}
                                arr={arr}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-body">
                                <Graphviz dot={arbolito} options={{ width: 300, height: 300 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  );
}

export default ERR;
