import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";

import { getRandomNumber, getSucceedSentence } from "./utils";
import { OperationType } from "./type";

interface RowProps {
  index: number;
  operation: OperationType;
  onSucceed: (isSucceded: boolean, index: number) => void;
}

export const Row = (props: RowProps) => {
  const { index, operation, onSucceed } = props;
  const [numbers, setNumbers] = React.useState(makeRandomNumbers(operation));
  const [value, setValue] = React.useState("");
  const [isOk, setIsOk] = React.useState(false);

  const succeedSentence = React.useRef(getSucceedSentence());

  React.useEffect(() => {
    setValue("");
    setIsOk(false);
    setNumbers(makeRandomNumbers(operation));
  }, [operation]);
  const onChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleResult = () => {
    const isSucceded = checkResult(
      numbers.resultA,
      numbers.resultB,
      parseInt(value),
      operation
    );
    setIsOk(isSucceded);
    onSucceed(isSucceded, index);
  };

  const onClickButton = () => {
    handleResult();
  };
  const onKeyDownInput = (e: React.KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Enter") {
      handleResult();
    }
  };

  return (
    <div className="row" key={index}>
      <div className="numbers-input">
        <div className="numbers">
          <p>{numbers.resultA}</p>
          <p>{operation}</p>
          <p>{numbers.resultB}</p>
          <p>=</p>
        </div>
        <TextField
          className="input"
          value={value}
          id="outlined-basic"
          label="Eredmény"
          variant="outlined"
          inputProps={{ type: "number" }}
          onChange={onChangeInput}
          onKeyDown={onKeyDownInput}
          disabled={isOk}
        />
        <Button sx={style(isOk)} onClick={onClickButton} disabled={isOk}>
          {isOk ? "Ok" : "Mehet"}
        </Button>
      </div>
      <div className="succed-sentence">{isOk && succeedSentence.current}</div>
    </div>
  );
};

const makeRandomNumbers = (operation: OperationType) => {
  const resultA = getRandomNumber(1, 100);
  let resultB: number;
  if (operation === "-") {
    resultB = getRandomNumber(1, resultA);
  } else {
    resultB = getRandomNumber(1, 100 - resultA);
  }
  console.log(resultA, resultB);
  return { resultA, resultB };
};

const checkResult = (
  a: number,
  b: number,
  result: number,
  operation: OperationType
) => {
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

const style: (isSucceed: boolean) => SxProps = (isSucceed: boolean) => {
  return {
    backgroundColor: "#00008ba2",
    color: "white",
    "&:hover": {
      backgroundColor: "DodgerBlue",
    },
    "&:disabled": {
      backgroundColor: "#0e0e58a1",
      color: "white",
    },
  };
};
