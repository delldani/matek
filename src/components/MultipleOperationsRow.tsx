import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";

import {
  getSucceedSentence,
  getRandomNumberForMultipleOperations,
} from "./utils";

interface MultipleOperationsRowProps {
  index: number;
  onSucceed: (isSucceded: boolean, index: number) => void;
}

export const MultipleOperationsRow = (props: MultipleOperationsRowProps) => {
  const { index, onSucceed } = props;
  const [value, setValue] = React.useState("");
  const [isOk, setIsOk] = React.useState(false);
  const data = React.useRef(getRandomNumberForMultipleOperations());

  const handleResult = () => {
    const isSucceded = value === data.current.results;

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
    <Box sx={style(isOk)} key={index}>
      <div className="multiple-operations-wrapper">
        <div className="multiple-operations-question">
          <div className="multiple-operations-numbers">
            <p>{data.current.numbers}</p>
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
        <Button className="button" onClick={onClickButton} disabled={isOk}>
          {isOk ? "Ok" : "Mehet"}
        </Button>
      </div>
      <div className="succed-sentence">{isOk && getSucceedSentence()}</div>
    </Box>
  );
};

const style: (isSucceed: boolean) => SxProps = (isSucceed: boolean) => {
  return {
    display: "flex",
    alignItems: "center",
    fontSize: "35px",
    fontWeight: "500",
    backgroundColor: "rgba(255, 255, 255, 0.425)",
    borderRadius: "60px",
    marginBottom: "10px",
    padding: "10px",
    width: "800px",
    "& .multiple-operations-wrapper": {
      width: "500px",
      display: "flex",
      alignItems: "center",
    },
    "& .multiple-operations-question": {
      width: "380px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
    "& .button": {
      backgroundColor: "#00008ba2",
      color: "white",
      height: "50px",
      "&:hover": {
        backgroundColor: "DodgerBlue",
      },
      "&:disabled": {
        backgroundColor: "#0e0e58a1",
        color: "white",
      },
    },
    "& .numbers": {
      width: "950px",
    },
    "& .multiple-operations-numbers": {
      display: "flex",
    },
  };
};
