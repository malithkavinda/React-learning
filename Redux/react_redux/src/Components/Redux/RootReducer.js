import { combineReducers } from "redux";
import pizzaReducer from "./Pizza/PizzaReducer";
import burgerReducer from "./Burger/BargarReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer
});

export default rootReducer;
