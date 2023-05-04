import React from "react";

export default function Tab(props) {
    let g =[];
   // console.log(props.valor);
 /*  console.log(props.valor);
  console.log(props);
 props.valor.map(T => {
    console.log(T.tipo);
});*/
if (props.valor !== undefined && props.valor.length > 0) {

let grupos = props.valor.split("~");
for(let i=0;i<grupos.length;i++){
    let datos = grupos[i].split(",");
    if(datos[1]!=undefined){
    let objeto = {
        tipo: datos[0],
        identificador: datos[1],
        tipo2: datos[2],
        entorno: datos[3],
        valor: datos[4],
        fila: datos[6],
        columna: datos[7]
    }; 
    g.push(objeto);
 //   console.log(datos);
}

}
//console.log(g);


 


//for(let i=0;i<props.valor.length;i++){
//console.log(props.valor[i].tipo);
//}




  return (
    <>
      <div className="container">
        <table class="table table-dark table-striped" id="miTabla">
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Identificador</th>
              <th scope="col">Tipo</th>
              <th scope="col">Entorno</th>
              <th scope="col">Valor</th>
              <th scope="col">Fila</th>
              <th scope="col">Columna</th>
            </tr>
          </thead>
          <tbody>
          {g.map((g,index) => {
            return (
              <tr key={index}>
                <th>{g.tipo}</th>
                <td>{g.identificador}</td>
                <td>{g.tipo2}</td>
                <td>{g.entorno}</td>
                <td>{g.valor}</td>
                <td>{g.fila}</td>
                <td>{g.columna}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
        
      </div>
    </>
  );
} else { return (
    <>
      <div className="container">
        <table class="table table-dark table-striped" id="miTabla">
          <thead>
            <tr>
              <th scope="col">Tipo</th>
              <th scope="col">Identificador</th>
              <th scope="col">Tipo</th>
              <th scope="col">Entorno</th>
              <th scope="col">Valor</th>
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
}


