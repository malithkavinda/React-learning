import { forwardRef } from "react";

const FirstChildRef = forwardRef(({value , onClick},ref) =>
{
    return(
        <div className="firstChild">
           <input ref={ref}></input>
        </div>
    )
})
export default FirstChildRef;