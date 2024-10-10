import { useRef } from "react";
import ChildRef from "./ChildRef/ChildRef";

function ClickCounter(){

      // Do not write or read ref.current during rendering.

    const counterRef = useRef(0);

    const handler = () =>{
        counterRef.current = counterRef.current + 1
        alert(`Counter click times : ${counterRef.current}`)
    }

    return(
        <div>
            <h2>Counter</h2>
            <button onClick={handler}>Counter Increaser</button>
            <div className="childRef">
                <ChildRef></ChildRef>
            </div>
        </div>
    )
}

export default ClickCounter;