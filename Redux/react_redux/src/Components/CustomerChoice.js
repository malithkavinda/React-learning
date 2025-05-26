import React, { useState } from "react";
import { orderBurger } from "./Redux";
import { connect } from "react-redux";

function CustomerChoice(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Burger available - {props.burgerBuns}</h2>
      <input
        type="number"
        placeholder="Please enter number of items"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      ></input>
      <button className="order_btn" onClick={() => props.orderBurger(number) }>
        Order Place
      </button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    burgerBuns: state.burger.burgerBuns,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    orderBurger: (number) => dispatch(orderBurger(number)),
  };
};
//connect map functions to componet props via the connect(react-redux)
export default connect(mapStatetoProps, mapDispatchToProps)(CustomerChoice);
