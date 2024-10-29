// task 1 --------------
// let handleEquals = (a, b) => {
//   if (a == b) {
//     return `equals`;
//   } else {
//     return `Doesn't equals`;
//   }
// };

// const result = handleEquals(2, 2);

// console.log(result);

// task 2 --------------------

// let fharengateToCelcius = (f) => {
//   if (typeof f !== "number") return false;

//   return (f - 32) / 1.8;
// };

// const result = fharengateToCelcius(true);
// console.log(result);

// task 3--------------------

let handleCalculate = (a, b, opertor) => {
  if (typeof a !== "number" || typeof b !== "number") return false;

  switch (opertor) {
    case "+":
      return a + b;
      break;
    case "-":
      return a - b;
      break;
    case "/":
      return a / b;
      break;
    case "*":
      return a * b;
      break;
    default:
      return false;
  }
};

const result = handleCalculate(1, 20, "*");
console.log(result);
