import React from "react";

export default function Errores(props) {
 // console.log(props.valor);
  /*
  console.log(props.valor);
  props.valor.map((value, index) => {
    console.log("-"+value.tipo);
    console.log("-"+index);
  })
 */
if(props.valor== undefined){
  return (
    <>
      <div className="container" >
        <table class="table table-dark table-striped" >
        <caption>Tabla de precios</caption>
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Fila</th>
              <th scope="col">Columna</th>
            </tr>
          </thead>
          <tbody>
         
          </tbody>
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
            {props.valor.map((value, index) => {
              return (
                <tr key={index}>
                  <th>{value.tipo}</th>
                  <td>{value.descripcion}</td>
                  <td>{value.linea}</td>
                  <td>{value.columna}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

}
