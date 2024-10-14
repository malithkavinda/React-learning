import { useCallback, useEffect, useState } from "react";
import ChildTest from "./ChildTest";

function Test(){
    const [count , setCount] = useState(0);
    const [randomnumber , setrandomNumber] = useState(0);

 
    const handler = () =>{
        console.log('update handler')
        setCount(count+ 1);
    }

    const getRandomNumber = () =>{
        console.log('random number')
        setrandomNumber(Math.random())
    }

    const getnumberText = useCallback (() =>{
        return 'calling get number  :'+ {count}
    },[count])

    useEffect(() =>{
        console.log('useEffect calling')
    },[getnumberText]);


    return(
        <div>
            <button onClick={handler}>Update Counter</button>
            <button onClick={getRandomNumber}> Update random number</button>
            {count}
            <p>
                random number is : {randomnumber}
            </p>
            <ChildTest></ChildTest>
        </div>
    )
}
export default Test;