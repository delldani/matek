import { Row } from "./Row";

const ROWNUMBER = 5;

interface ExercisesProps {
  onSucceed: (isSucceded: boolean, index: number) => void;
}
export const Exercises = (props: ExercisesProps) => {
  const { onSucceed } = props;
  const rows = makeRows(ROWNUMBER, onSucceed);
  return <div className="numbers">{rows}</div>;
};

const makeRows = (
  rowsNumber: number,
  onSucceed: (isSucceded: boolean, index: number) => void
) => {
  let rows: JSX.Element[] = [];
  for (let i = 0; i < rowsNumber; i++) {
    rows.push(<Row index={i} operation={"-"} onSucceed={onSucceed} />);
  }
  return rows;
};
