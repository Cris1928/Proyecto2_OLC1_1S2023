import React from "react";
export default function Errores2(props) {
    //console.log(props);
    /*
        console.log(props.valor);
       props.valor.Errores.map(error => {
        console.log(error.tipo);
    });
    */

    if(props.valor.Errores== undefined){

        return (
            <>
            <div className="container">
              <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Tipo</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Fila</th>
                    <th scope="col">Columna</th>
                  </tr>
                </thead>
              </table>
            </div>
          </>
          );

        }else{ 


  return (
    <>
    <div className="container">
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Tipo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Fila</th>
            <th scope="col">Columna</th>
          </tr>
        </thead>
        <tbody>
          {props.valor.Errores.map((error,index) => {
            return (
              <tr key={index}>
                <th>{error.tipo}</th>
                <td>{error.descripcion}</td>
                <td>{error.linea}</td>
                <td>{error.columna}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </>
  );  }
} 