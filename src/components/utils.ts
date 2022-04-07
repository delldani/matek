import { OperationType } from "./type";
import {
  SUCCEDSENTENCES,
  bgPictures,
  resultsAddings,
  poolForDivide,
  poolConversion,
  poolForMultipleOperations,
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

export const getDivideRandomNumber = (fromPool: boolean = false,tables:number[]=[2]) => {
  if (fromPool) {
    return getRandomDivideNumberFromPool();
  }
  const newTable:{a:number,b:number}[] = [];
  tables.forEach((item)=>{
    getMultipleTable(item).forEach((multipleItem)=>{
      newTable.push({a:multipleItem.a * multipleItem.b,b:item })
    });
  })
  return newTable[getRandomNumber(0,newTable.length-1)];
};
export const getRandomDivideNumberFromPool = () => {
  return poolForDivide[getRandomNumber(0, poolForDivide.length - 1)];
};

export const getRandomConversionFromPool = () => {
  return poolConversion[getRandomNumber(0, poolConversion.length - 1)];
};

const getMultipleTable = (number: number) => {
  let table: { a: number; b: number }[] = [];
  for (let i = 2; i < 11; i++) {
    table.push({ a: number, b: i });
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
export const getRandomNumberForMultipleOperations = ()=>{
  return  poolForMultipleOperations[getRandomNumber(0,poolForMultipleOperations.length-1)];
};

export const makeRandomNumbers = (operation: OperationType) => {

  let resultA: number  = 0;
  let resultB: number = 0;
  let resultC: number = 0;
  let conversionFirst:string = '';
  let conversionSecond:string='';
  let conversionSolvation= '';
  let operationsNumbers = '';
  let operationsResults = '';

  if (operation === "-") {
    resultA = getRandomNumber(1, 100);
    resultB = getRandomNumber(1, resultA);
  } else if (operation === "+") {
    resultA = getRandomNumber(1, 100);
    resultB = getRandomNumber(1, 100 - resultA);
  } else if (operation === "*") {
    const { a, b } = getRandomMultipleNumber([2,3,4,5,6,7]);
    resultA = a;
    resultB = b;
  } else if (operation === "/") {
    const { a, b } = getDivideRandomNumber(false,[2,3,4,5,6,7]);
    resultA = a;
    resultB = b;
  }
  else if (operation === "conversion") {
    const { first,second,solvation} = getRandomConversionFromPool();
    conversionFirst = first;
    conversionSecond = second;
    conversionSolvation= solvation;
  } else if (operation === "operations") {
    const { numbers,results} = getRandomNumberForMultipleOperations();
    operationsNumbers = numbers;
    operationsResults = results;
  }
  return { resultA, resultB,resultC,conversionFirst,conversionSecond,conversionSolvation,operationsNumbers,operationsResults };
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
