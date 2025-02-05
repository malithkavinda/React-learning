import { useState } from "react";
import  Counter  from "./test_projects/Counter/counter";
import Todo from "./test_projects/Todo_app/todo";

function App() {
  const[isCounter,setIsCounter] = useState('true');

  function handleapps()
  {
    setIsCounter(() => !isCounter);
  }
  return (
   <div>
    <button onClick={handleapps}>Change apps</button>
    {isCounter ? <Counter></Counter> : <Todo></Todo>}
   </div>
  );
}

export default App;
  