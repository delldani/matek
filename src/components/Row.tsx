import React from "react";
import TextField from "@mui/material/TextField";

type OperationType = "+" | "-" | "*" | "/";
interface RowProps {
  index: number;
  operation: OperationType;
}

export const Row = (props: RowProps) => {
  const { index, operation } = props;
  const numbers = React.useRef(makeRandomNumbers());
  const [isOk, setIsOk] = React.useState(false);

  const onChangeInput = (e: any) => {
    const result = checkResult(
      numbers.current.resultA,
      numbers.current.resultB,
      parseInt(e.target.value),
      operation
    );
    setIsOk(result);
  };

  return (
    <div className="row" key={index}>
      <div className="numbers">
        <p>{numbers.current.resultA}</p>
        <p>-</p>
        <p>{numbers.current.resultB}</p>
        <p>=</p>
        <TextField
          id="outlined-basic"
          label="Eredmény"
          variant="outlined"
          inputProps={{ type: "number" }}
          onChange={onChangeInput}
        />
      </div>
      <div className="result">{isOk && "OK"}</div>
    </div>
  );
};

const getRandomNumber = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeRandomNumbers = () => {
  const resultA = getRandomNumber(1, 100);
  const resultB = getRandomNumber(1, resultA);

  return { resultA, resultB };
};

const checkResult = (
  a: number,
  b: number,
  result: number,
  operation: OperationType
) => {
  console.log(a, b, result);

  switch (operation) {
    case "-":
      return a - b === result;
    case "+":
      return a + b === result;
    case "*":
      return a * b === result;
    case "/":
      return a / b === result;
  }
};
