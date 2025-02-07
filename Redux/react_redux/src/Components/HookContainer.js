import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderPizza } from "./Redux";

function HookContainer(props) {

    const pizzaBase= useSelector(state => state.pizzaBase);
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of pizza available - {props.pizzaBase}</h2>
      <button className="order_btn" onClick={()=>dispatch(orderPizza())}>Order Pizza</button>
    </div>
  );
}

export default HookContainer

