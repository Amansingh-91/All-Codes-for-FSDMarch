import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Counter</h1>
      <h2>{0}</h2>
      <button>increment</button>
      <button>decrement</button>
    </div>
  );
}

export default App;
