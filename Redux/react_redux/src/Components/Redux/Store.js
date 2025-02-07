import { createStore } from "redux"
import pizzaReducer from "./Pizza/PizzaReducer"

const store = createStore(pizzaReducer)
export default store;