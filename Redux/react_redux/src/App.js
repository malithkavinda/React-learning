 //import PizzaBox from "./Components/PizzaBox";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";
import CustomerChoice from "./Components/CustomerChoice";
import ProductsContainer from "./Components/ProductsContainer";
//import BurgerBox from "./Components/BurgerBox";
//import HookContainer from "./Components/HookContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        {/* <PizzaBox />
        <BurgerBox/> */}
        {/* <CustomerChoice/> */}
        {/* <HookContainer></HookContainer> */}
        <ProductsContainer/>
      </Provider>
    </div>
  );
}

export default App;
