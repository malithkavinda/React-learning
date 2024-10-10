import { useRef } from "react";
import ClickCounter from "./specifications/ClickCounter";

function App() {

  // Do not write or read ref.current during rendering.

  const inputRef = useRef(null);

  const handler = () =>
    {
     inputRef.current.focus();
    }

  return (
    <div>
      <h2>Normal ref</h2>
      <input ref={inputRef}></input>
      <button onClick={handler}>Focus the input</button>
      <div className="counter">
        <ClickCounter></ClickCounter>
      </div>
    </div>
  );
}

export default App;
