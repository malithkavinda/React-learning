import { useRef } from "react";
import FirstChildRef from "./FirstChildRef";

function ChildRef(){
    const childRef = useRef(null);

    const handler = (e) =>{
        childRef.current.focus();
    }

    return(
        <div className="childRef">
            <h2>Child ref</h2>
           <button onClick={handler}>Focus parent input</button>
            <FirstChildRef ref={childRef}></FirstChildRef>
        </div>
    )
}
export default ChildRef;