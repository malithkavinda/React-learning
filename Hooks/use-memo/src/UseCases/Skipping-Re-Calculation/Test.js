import { useEffect, useMemo, useState } from "react";

function SkipReCalculation({proTest}){

    const [value , setValue] = useState('waiting for result');
    const calculation = useMemo(() =>{
        let initial = 1;
        let count = 1;
        while(initial < 10000)
        {
            count = count+1
            console.log(count);
            initial++;
        }
       return count;
    },[]);

    useEffect(() =>{
        console.log(calculation)
        setValue(calculation);
    },[proTest]);

    return(
        <div>
            {value}
        </div>
    )
}
export default SkipReCalculation;