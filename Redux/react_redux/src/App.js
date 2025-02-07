 import PizzaBox from "./Components/PizzaBox";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";
import BurgerBox from "./Components/BurgerBox";
//import HookContainer from "./Components/HookContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PizzaBox />
        <BurgerBox/>
        {/* <HookContainer></HookContainer> */}
      </Provider>
    </div>
  );
}

export default App;
