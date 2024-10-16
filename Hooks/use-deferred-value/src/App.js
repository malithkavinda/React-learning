import { useDeferredValue, useEffect, useState, useTransition } from "react";

function App() {
    const [isPending, startTransition] = useTransition();
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState(inputValue);
    const deferredQuery = useDeferredValue(debouncedValue);

    //open conlose befor typing in input.

    useEffect(() => {
      const handler = setTimeout(() => {
          setDebouncedValue(inputValue);
      }, 500); // Delay of 500ms before updating the debouncedValue
      
      return () => {
          clearTimeout(handler);
      };
  }, [inputValue]);
    
    useEffect(() =>{
        fartch();
    },[deferredQuery])

    const inputHandler = (e) =>{
        const value = e.target.value;
        setInputValue(value); 
    }

    const fartch = () => {
      startTransition(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((response) => response.json())
          .then((json) => console.log(json));
      });
    };

    return(
        <div>
            {isPending ?<h1>Loading...</h1> : null}
            <input type="text" onChange={inputHandler} value={inputValue}></input>
        </div>
    )
}

export default App;
