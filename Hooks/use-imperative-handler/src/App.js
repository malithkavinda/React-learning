import { useRef } from "react";
import ChildCom from "./ChildCom";

function App() {
  // Exposing a custom ref handle to the parent component
  const inputref = useRef(null);

  const handler = () =>{
    inputref.current.focus();
    console.log(inputref.current.value); 
  }
  return (
    <div>
      <button onClick={handler} > Child input focus </button>
      <ChildCom ref={inputref}></ChildCom>
    </div>
  );
}

export default App;
