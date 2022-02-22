import React from "react";
import "./App.css";
import { Exercises } from "./components/Exercises";
function App() {
  const [result, setResult] = React.useState(0);
  const onSucceed = (isSucceded: boolean, index: number) => {
    isSucceded && setResult(result + 1);
  };

  return (
    <div className="App">
      <Exercises onSucceed={onSucceed} />
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
