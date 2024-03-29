import { Player } from "./pages/Player";
import { Provider } from "react-redux";
import { store } from "./store";

export function App() {

  return (
    <Provider store={store}>
        <Player/>
    </Provider>
     
  )
}

