import { useEffect, useState } from "react";

function ChildTest(){
    const[num , setNum] = useState(null) ;

    useEffect(() =>{
        takingRandomNumber()
    },[]);

    const takingRandomNumber = () =>{
        let testNumber =  120.00;
        console.log(testNumber);
        setNum(testNumber);
    }

 return(
    <div>
        Child test number {num}
    </div>
 )
}
export default ChildTest;