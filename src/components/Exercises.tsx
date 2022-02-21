import { Row } from "./Row";

const ROWNUMBER = 5;

export const Exercises = () => {
  const rows = makeRows(ROWNUMBER);
  return <div className="numbers">{rows}</div>;
};

const makeRows = (rowsNumber: number) => {
  let rows: JSX.Element[] = [];
  for (let i = 0; i < rowsNumber; i++) {
    rows.push(<Row index={i} operation={"-"} />);
  }
  return rows;
};
