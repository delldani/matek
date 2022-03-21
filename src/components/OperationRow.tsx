import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";

import { getSucceedSentence, makeRandomNumbers, checkResult } from "./utils";
import { OperationType } from "./type";

interface OperationRowProps {
  index: number;
  operation: OperationType;
  onSucceed: (isSucceded: boolean, index: number) => void;
}

export const OperationRow = (props: OperationRowProps) => {
  const { index, operation, onSucceed } = props;
  const [numbers, setNumbers] = React.useState(makeRandomNumbers(operation));
  const [value, setValue] = React.useState("");
  const [isOk, setIsOk] = React.useState(false);

  React.useEffect(() => {
    setValue("");
    setIsOk(false);
    setNumbers(makeRandomNumbers(operation));
  }, [operation]);

  const handleResult = () => {
    const isSucceded = checkResult(
      numbers.resultA,
      numbers.resultB,
      parseInt(value),
      operation as "+" | "-" | "*" | "/"
    );
    setIsOk(isSucceded);
    onSucceed(isSucceded, index);
  };

  const onChangeInput = (e: any) => {
    const value = e.target.value;
    !/[a-zA-Z]/.test(value) && setValue(e.target.value);
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
      <div className="question-wrapper">
        <div className="operation-question">
          <div className="numbers">
            <p>{numbers.resultA}</p>
            <p>{operation}</p>
            <p>{numbers.resultB}</p>
            <p>=</p>
          </div>
          <TextField
            className="operation-input"
            value={value}
            label="Eredmény"
            variant="outlined"
            onChange={onChangeInput}
            onKeyDown={onKeyDownInput}
            disabled={isOk}
            autoComplete="off"
          />
        </div>
        <Button sx={style(isOk)} onClick={onClickButton} disabled={isOk}>
          {isOk ? "Ok" : "Mehet"}
        </Button>
      </div>
      <div className="succed-sentence">{isOk && getSucceedSentence()}</div>
    </div>
  );
};

const style: (isSucceed: boolean) => SxProps = (isSucceed: boolean) => {
  return {
    backgroundColor: "#00008ba2",
    color: "white",
    width: "80px",
    "&:hover": {
      backgroundColor: "DodgerBlue",
    },
    "&:disabled": {
      backgroundColor: "#0e0e58a1",
      color: "white",
    },
  };
};
