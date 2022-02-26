import React from "react";
import "./App.css";
import clsx from "clsx";

import { getRandomBgPicture } from "./components/utils";
import { Exercises } from "./components/Exercises";
import { OperationType } from "./components/type";
import { getResult } from "./components/utils";

function App() {
  const [result, setResult] = React.useState(0);
  const refApp = React.useRef<HTMLDivElement>(null);
  const [operationType, setOperationType] = React.useState<OperationType>("-");

  React.useEffect(() => {
    if (refApp.current) {
      console.log(getRandomBgPicture());
      refApp.current.style.backgroundImage = `url('${getRandomBgPicture()}')`;
    }
  }, []);

  const onSucceed = (isSucceded: boolean, index: number) => {
    isSucceded && setResult((result) => getResult(result, operationType));
  };

  const onClickOperation = (operation: OperationType) => {
    setOperationType(operation);
  };

  return (
    <div ref={refApp} className="App">
      <Exercises onSucceed={onSucceed} operationType={operationType} />
      <div className="result-wrapper">
          <div className="result">{result}</div>
      
            <img className='v-buck' src="/pngfind.com-vbucks-png-4688626.png" alt="vbuck" />
      </div>
      <div        
        className={clsx(
          "addition",
          operationType === "+" && "active-operation"
        )}
        onClick={() => onClickOperation("+")}
      >
        Összeadás
      </div>
      <div
        className={clsx(
          "substraction",
          operationType === "-" && "active-operation"
        )}
        onClick={() => onClickOperation("-")}
      >
        Kivonás
      </div>
      <div
        className={clsx(
          "multiple",
          operationType === "*" && "active-operation"
        )}
        onClick={() => onClickOperation("*")}
      >
        szorzás
      </div>
      <div
        className={clsx("divide", operationType === "/" && "active-operation")}
        onClick={() => onClickOperation("/")}
      >
        osztás
      </div>
    </div>
  );
}

export default App;
