import React from "react";
import { Row } from "./Row";
import { OperationType } from "./type";
import { getRandomNumber } from "./utils";

const ROWNUMBER = 5;

interface ExercisesProps {
  onSucceed: (isSucceded: boolean, index: number) => void;
  operationType: OperationType;
}
export const Exercises = (props: ExercisesProps) => {
  const { onSucceed, operationType } = props;
  const [rows, setRows] = React.useState<JSX.Element[]>(
    makeRows(ROWNUMBER, onSucceed, operationType)
  );
  React.useEffect(() => {
    const newRows = makeRows(ROWNUMBER, onSucceed, operationType);
    setRows(newRows);
  }, [operationType]);
  return <div className="rows">{rows}</div>;
};

const makeRows = (
  rowsNumber: number,
  onSucceed: (isSucceded: boolean, index: number) => void,
  operationType: OperationType
) => {
  let rows: JSX.Element[] = [];
  for (let i = 0; i < rowsNumber; i++) {
    rows.push(
      <div key={getRandomNumber(0, 10000)}>
        <Row index={i} operation={operationType} onSucceed={onSucceed} />
      </div>
    );
  }
  return rows;
};
