import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: "INCREMENT"})
  }

  const decrement = () => {
    dispatch({type: "DECREMENT"})
  }

  return (
    <div style={{textAlign: "center", justifyContent: "center"}}>
      Advanced State Management With React Redux
      <div>
        Counter : {counter}
        <div style={{justifyContent: "space-between"}}>
          <button onClick={increment}>Increment +</button>
          <button onClick={decrement}>Decrement -</button>
        </div>
      </div>
    </div>
  );
}

export default App;
