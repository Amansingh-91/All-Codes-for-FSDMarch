import React, { useState } from "react";
import Todos from "./todos";
import WindowChanger from "./WindowSizeChanger";
const App = () => {
  let [switchIt, setSwitch] = useState(true);

  return (
    <>
      <button
        className="btn btn-success"
        onClick={() => {
          setSwitch(!switchIt);
        }}
      >
        Switch component
      </button>
      {switchIt ? <Todos /> : <WindowChanger />}
    </>
  );
};

export default App;
