import React from "react";
//import  {orderPizza}  from "./Redux/Pizza/PizzaAction";
import {orderPizza} from "./Redux";
import {connect} from "react-redux"

function PizzaBox(props) {
  return (
    <div>
      <h2>Number of pizza available - {props.pizzaBase}</h2>
      <button className="order_btn" onClick={props.orderPizza}>Order Pizza</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    pizzaBase: state.pizza.pizzaBase,
  };
};

const mapDispatchToProps = (dispatch)=>{
    return{
       orderPizza : () => dispatch(orderPizza())
    }
}
//connect map functions to componet props via the connect(react-redux)
export default connect(mapStatetoProps,mapDispatchToProps)(PizzaBox);

