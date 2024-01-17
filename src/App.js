import { Provider } from "react-redux";
import store from './store/store'
import Todos from "./compenets/Todos";
function App() {

  return (
    <>
      <Provider store={store}>
        <Todos />
      </Provider>
    </>
  )
}

export default App;
