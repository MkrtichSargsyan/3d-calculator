import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = '';
  switch (operation) {
    case '-':
      result = new Big(numberOne - numberTwo);
    case '+':
      result = new Big(numberOne + numberTwo);
    case '/':
      result = new Big(numberOne / numberTwo);
    case '*':
      result = new Big(numberOne * numberTwo);
    brea
    default:
      result = 0;
  }
  return result;
};

export default operate;
