import React from "react";
import TextField from "@mui/material/TextField";

interface RowProps {
  index: number;
}

export const Row = (props: RowProps) => {
  const { index } = props;
  const numbers = React.useRef(makeRandomNumbers());
  const [isOk, setIsOk] = React.useState(false);

  const onChangeInput = (e: any) => {
    console.log(index, parseInt(e.target.value));
    numbers.current.resultA - numbers.current.resultB ===
    parseInt(e.target.value)
      ? setIsOk(true)
      : setIsOk(false);
  };

  return (
    <div className="row" key={index}>
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
      {isOk && "OK"}
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
