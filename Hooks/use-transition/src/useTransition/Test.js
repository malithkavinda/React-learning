import { useState, useTransition } from "react";

function Test(){
    const [isPending, startTransition] = useTransition();
    const [inputValue, setInputValue] = useState("");


    const inputHandler = (e) =>{
        const value = e.target.value;
        setInputValue(value);
        
        startTransition(() =>{
            fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))
        })
    }

    return(
        <div>
            {isPending ?<h1>Loading...</h1> : null}
            <input type="text" onChange={inputHandler} value={inputValue}></input>
        </div>
    )
}
export default Test;