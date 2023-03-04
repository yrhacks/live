import "./App.css";
import { useState } from "react";

function App() {
  const [myNumber, setMyNumber] = useState(0);

  return (
    <div className="App">
      <div className="gradient-blob blob-top" />
      <h1>
        React <span className="gradient-text">YRHacks</span> Workshop
      </h1>

      <button
        onClick={() => {
          setMyNumber(myNumber + 1);
          console.log(myNumber);
        }}
      >
        Click Me! {myNumber}
      </button>
    </div>
  );
}

export default App;
