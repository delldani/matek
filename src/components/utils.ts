import { OperationType } from "./type";
import { SUCCEDSENTENCES, bgPictures, resultsAddings } from "./defaults";

export const getResult = (result: number, operationType: OperationType) => {
  return result + resultsAddings[operationType];
};

export const getRandomNumber = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomBgPicture = () => {
  return bgPictures[getRandomNumber(0, bgPictures.length - 1)];
};

export const getSucceedSentence = () => {
  return SUCCEDSENTENCES[getRandomNumber(0, SUCCEDSENTENCES.length - 1)];
};

export const getDivideRandomNumber = () => {
  let a = 0;
  let b = 0;
  do {
    a = getRandomNumber(6, 15);
    b = getRandomNumber(2, a / 2);
  } while (a % b !== 0);
  return { a, b };
};

export const makeRandomNumbers = (operation: OperationType) => {
  let resultA: number = 0;
  let resultB: number = 0;
  if (operation === "-") {
    resultA = getRandomNumber(1, 100);
    resultB = getRandomNumber(1, resultA);
  } else if (operation === "+") {
    resultA = getRandomNumber(1, 100);
    resultB = getRandomNumber(1, 100 - resultA);
  } else if (operation === "*") {
    resultA = getRandomNumber(2, 5);
    resultB = getRandomNumber(1, 5);
  } else if (operation === "/") {
    const { a, b } = getDivideRandomNumber();
    resultA = a;
    resultB = b;
  }
  return { resultA, resultB };
};

export const checkResult = (
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
