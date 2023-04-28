import React from "react";
//import "../Styles/editor.css";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";

export default function Editor(props) {
  const handlerChangeEditor = (evt) => {
    props.handlerChange(evt.target.value);
  };

  return (
    <>
      <div class="container">
        <label for="exampleFormControlTextarea1" style={{fontSize: "30px"}}>{props.text}</label>
        <CodeMirror
          value="hola mundo"
          height="700px"
          width="934px"
          theme={dracula}
          extensions={[javascript({ jsx: true })]}
          onChange={handlerChangeEditor}
        />
        {props.comp} {props.comp2}
      </div>
    </>
  );
}
