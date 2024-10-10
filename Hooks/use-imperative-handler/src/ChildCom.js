import { forwardRef, useImperativeHandle, useRef } from "react";

const ChildCom = forwardRef((d,ref)=> {
    const inputRef = useRef(null);
    
    useImperativeHandle(ref , ()=>{
        return{
            focus(){
                inputRef.current.focus();
            },
            scrollIntoView(){
                inputRef.current.scrollIntoView()
            }
        }
    },[])
    return(
        <>
           <input ref={inputRef}></input>
        </>
    )
});
export default ChildCom;