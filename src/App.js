import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(counterActions.increment());
  }

  const decrement = () => {
    dispatch(counterActions.decrement());
  }

  return (
    <div style={{textAlign: "center", justifyContent: "center"}}>
      Advanced State Management With React Redux
      <div>
        Counter : {counter}
        <div style={{justifyContent: "space-between"}}>
          <button onClick={increment}>Increment +</button>
          <button onClick={decrement}>Increment -</button>
        </div>
      </div>
    </div>
  );
}

export default App;
