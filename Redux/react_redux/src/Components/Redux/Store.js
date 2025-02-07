import { createStore } from "redux"
import rootReducer from "./RootReducer";
//import pizzaReducer from "./Pizza/PizzaReducer";

const store = createStore(rootReducer)
export default store;