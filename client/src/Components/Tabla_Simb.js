import React from "react";

export default function Tab(props) {
 /*  console.log(props.valor);
  console.log(props);
 props.valor.map(T => {
    console.log(T.tipo);
});*/


let grupos = props.valor.split("~");
//console.log(grupos);
for(let i=0;i<grupos.length;i++){
    let datos = grupos[i].split(",");
  console.log(datos);
}
 


//for(let i=0;i<props.valor.length;i++){
//console.log(props.valor[i].tipo);
//}




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
          
          </tbody>
        </table>
      </div>
    </>
  );
}
