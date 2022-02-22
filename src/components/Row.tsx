import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";

type OperationType = "+" | "-" | "*" | "/";
interface RowProps {
  index: number;
  operation: OperationType;
  onSucceed: (isSucceded: boolean, index: number) => void;
}

export const Row = (props: RowProps) => {
  const { index, operation, onSucceed } = props;
  const numbers = React.useRef(makeRandomNumbers());
  const [value, setValue] = React.useState("");
  const [isOk, setIsOk] = React.useState(false);

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleResult = () => {
    const isSucceded = checkResult(
      numbers.current.resultA,
      numbers.current.resultB,
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
      <div className="numbers">
        <p>{numbers.current.resultA}</p>
        <p>-</p>
        <p>{numbers.current.resultB}</p>
        <p>=</p>
        <TextField
          className="input"
          value={value}
          id="outlined-basic"
          label="Eredmény"
          variant="outlined"
          inputProps={{ type: "number" }}
          onChange={onChangeInput}
          onKeyDown={onKeyDownInput}
        />
        <Button sx={style(isOk)} onClick={onClickButton} disabled={isOk}>
          Mehet
        </Button>
      </div>
      <div className="row-result">{isOk && "OK"}</div>
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
    backgroundColor: isSucceed ? "green" : "gray",
    color: "white",
    "&:hover": {
      backgroundColor: "darkgrey",
    },
  };
};
