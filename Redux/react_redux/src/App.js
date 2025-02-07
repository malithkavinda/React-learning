import PizzaBox from "./Components/PizzaBox";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PizzaBox />
      </Provider>
    </div>
  );
}

export default App;
