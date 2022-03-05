import { OperationType } from "./type";
import {
  SUCCEDSENTENCES,
  bgPictures,
  resultsAddings,
  poolForDivide,
  poolConversion
} from "./defaults";

export const getResult = (result: number, operationType: OperationType) => {
  return result + resultsAddings[operationType];
};

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomBgPicture = () => {
  return bgPictures[getRandomNumber(0, bgPictures.length - 1)];
};

export const getSucceedSentence = () => {
  return SUCCEDSENTENCES[getRandomNumber(0, SUCCEDSENTENCES.length - 1)];
};

export const getDivideRandomNumber = (fromPool: boolean = true) => {
  if (fromPool) {
    return getRandomDivideNumberFromPool();
  }
  let a = 0;
  let b = 0;
  do {
    a = getRandomNumber(6, 15);
    b = getRandomNumber(2, a / 2);
  } while (a % b !== 0);
  return { a, b };
};
export const getRandomDivideNumberFromPool = () => {
  return poolForDivide[getRandomNumber(0, poolForDivide.length - 1)];
};

export const getRandomConversionFromPool = () => {
  return poolConversion[getRandomNumber(0, poolConversion.length - 1)];
};

const getMultipleTable = (number: number) => {
  let table: { a: number; b: number }[] = [];
  for (let i = 1; i < 11; i++) {
    table.push({ a: i, b: number });
  }
  return table;
};

export const getRandomMultipleNumber = (tables: number[] = [2, 3]) => {
  let allTables: { a: number; b: number }[] = [];
  tables.forEach((item) => {
    allTables.push(...getMultipleTable(item));
  });
  return allTables[getRandomNumber(0, allTables.length - 1)];
};

export const makeRandomNumbers = (operation: OperationType) => {
  let resultA: number  = 0;
  let resultB: number = 0;
  let conersionFirst:string = '';
  let conersionSecond:string='';
  let conersionSolvation= '';
  if (operation === "-") {
    resultA = getRandomNumber(1, 100);
    resultB = getRandomNumber(1, resultA);
  } else if (operation === "+") {
    resultA = getRandomNumber(1, 100);
    resultB = getRandomNumber(1, 100 - resultA);
  } else if (operation === "*") {
    const { a, b } = getRandomMultipleNumber([2]);
    resultA = a;
    resultB = b;
  } else if (operation === "/") {
    const { a, b } = getDivideRandomNumber(true);
    resultA = a;
    resultB = b;
  }
  else if (operation === "conversion") {
    const { first,second,solvation} = getRandomConversionFromPool();
    conersionFirst = first;
    conersionSecond = second;
    conersionSolvation= solvation;
  }
  return { resultA, resultB,conersionFirst,conersionSecond,conersionSolvation };
};

export const checkResult = (
  a: number ,
  b: number,
  result: number,
  operation:"+" | "-" | "*" | "/" ,
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
export const getTodayDate = () => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
};
