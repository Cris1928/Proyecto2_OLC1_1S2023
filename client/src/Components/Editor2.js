import React from "react";
import '../Styles/textArea.css'

export default function Editor(props) {
    const handlerChangeEditor = (evt) => {
      props.handlerChange(evt.target.value);
    };
  
    return (
      <>
        <div class="container">
          <label class="text-area" for="exampleFormControlTextarea1" style={{fontSize: "30px"}}>{props.text}</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="20" onChange={handlerChangeEditor} value={props.value}></textarea>
            {props.comp} {props.comp2}
        </div>
      </>
    );
  }
  