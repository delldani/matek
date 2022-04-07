import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";

import { getSucceedSentence, makeRandomNumbers, checkResult } from "./utils";
import { OperationType } from "./type";

interface ConversionRowProps {
  index: number;
  operation: OperationType;
  onSucceed: (isSucceded: boolean, index: number) => void;
}

export const ConversionRow = (props: ConversionRowProps) => {
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
    const isSucceded = value === numbers.conversionSolvation;
    setIsOk(isSucceded);
    onSucceed(isSucceded, index);
  };

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
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
      <div className="conversion-question">
        <p>{numbers.conversionFirst}</p>
        <TextField
          className="conversion-input"
          value={value}
          label="Nagyobb"
          variant="outlined"
          onChange={onChangeInput}
          onKeyDown={onKeyDownInput}
          disabled={isOk}
          autoComplete="off"
        />
        <p>{numbers.conversionSecond}</p>
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
