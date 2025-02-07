import React from "react";
//import  {orderPizza}  from "./Redux/Pizza/PizzaAction";
import {orderBurger} from "./Redux";
import {connect} from "react-redux"

function BurgerBox(props) {
  return (
    <div>
      <h2>Number of Burger available - {props.burgerBuns}</h2>
      <button className="order_btn" onClick={props.orderBurger}>Order Burger</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBuns,
  };
};

const mapDispatchToProps = (dispatch)=>{
    return{
      orderBurger : () => dispatch(orderBurger())
    }
}
//connect map functions to componet props via the connect(react-redux)
export default connect(mapStatetoProps,mapDispatchToProps)(BurgerBox);

