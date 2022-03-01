import React from "react";
import "./App.css";
import clsx from "clsx";

import { getRandomBgPicture } from "./components/utils";
import { Exercises } from "./components/Exercises";
import { OperationType } from "./components/type";
import { getResult, getTodayDate } from "./components/utils";
import { sendData } from "./components/apiConnection";

function App() {
  const [result, setResult] = React.useState(0);
  const refResult = React.useRef(0);
  const refApp = React.useRef<HTMLDivElement>(null);
  const [operationType, setOperationType] = React.useState<OperationType>("-");

  const handleData = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
    const { year, month, day, hour, minute } = getTodayDate();
    sendData(`${year}-${month}-${day}-${hour}-${minute}`, refResult.current);
  };

  React.useEffect(() => {
    window.addEventListener("beforeunload", (e) => handleData(e));
    if (refApp.current) {
      refApp.current.style.backgroundImage = `url('${getRandomBgPicture()}')`;
    }
    return () => {
      window.removeEventListener("beforeunload", handleData);
    };
  }, []);

  React.useEffect(() => {
    if (result !== 0) {
      refResult.current = result;
    }
  }, [result]);

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

        <img
          className="v-buck"
          src="/pngfind.com-vbucks-png-4688626.png"
          alt="vbuck"
        />
      </div>
      <div
        className={clsx(
          "addition",
          operationType === "+" && "active-operation"
        )}
        onClick={() => {
          onClickOperation("+");
        }}
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
