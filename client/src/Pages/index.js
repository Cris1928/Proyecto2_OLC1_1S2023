import React, { useState } from "react";
import '../Styles/index.css'
import Navbar from "../Components/Navbar";
import Editor2 from "../Components/Editor2";
//import Editor from "../Components/Editor";
import Service from "../Services/Service";
import Errores from "../Components/Errores";
import Errores2 from "../Components/Errores2";
import Tab from "../Components/Tabla_Simb";
//let {Lista_Errores} = require('../../server/src/utils/Interprete/Ast/Lista_Errores');

//import  "C:\\Users\\USER\\Desktop\\Proyecto\\server\\src\\utils\\Interprete\\Ast\\Lista_Errores.ts"; 
//import lista_errores from "..../server/src/utils/Interprete/Ast/Lista_Errores.ts";
import { Graphviz } from 'graphviz-react';
  
function Index() {
  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");
  const [arr, setArr] = useState([]);
  const [err, setErr] = useState([]);
  const [simb, setSimb] = useState([]);
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
    });

    Service.parse(value).then((response) => {
      setArr(response.errores);
    });


    Service.parse(value).then((response) => {
      setErr(response.erroresL);
    });

    Service.parse(value).then((response) => {
    //  console.log(response.tablaSimbolos.MostrarTabla())
      setSimb(response.tablaSimbolos);
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
      {/* <Errores2 valor={err}/>     <button type="button" class="btn btn-success btn-run" onClick={handlerPostParse}>►</button> */}

      {/* <Editor text={"Consola de Entrada:"} handlerChange={changeText} comp={buttonTraducir} />
            <Editor text={"Consola de Salida:"} value={response} comp={buttonLimpiar} />  */}
      <div class="area-trabajo">

      <Editor2
        text={"Consola de Entrada:"}
        handlerChange={changeText}
        comp={buttonTraducir}
      />
      <Editor2
        text={"Consola de Salida:"}
        value={response}
        comp={buttonLimpiar}
      />
      </div>
      <Errores valor={arr}/>


      <Errores2 valor={err}/>
      
      <div class="grafitoo">
        <Graphviz dot={arbolito} options={{fit: true, width: '100%', zoom: false}} />
      </div>

      <Tab valor={simb}/>



    </>
  );
}

export default Index;
