
import { useState } from 'react';
import SkipReCalculation from './UseCases/Skipping-Re-Calculation/Test';

function App() {
  // Skipping expensive recalculations 
  const [count , setCount] = useState(0);

  const handler = () =>{
    let newCount = count + 1 ; 
    setCount(newCount);
  }

  return (
  <div>
    <h2>Skipping expensive recalculations </h2>
    <button onClick={handler}>Click Me</button>
    <SkipReCalculation proTest={count}></SkipReCalculation>
  </div>
  );
}

export default App;
