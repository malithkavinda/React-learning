import { combineReducers } from "redux";
import pizzaReducer from "./Pizza/PizzaReducer";
import burgerReducer from "./Burger/BargarReducer";
import productReducer from "./Products/ProductReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer,
  product : productReducer 
});

export default rootReducer;
