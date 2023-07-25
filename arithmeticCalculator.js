/* Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. */

// defining function
const arithmeticCalculator = (num1, num2, operation) => {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Input Correct Information";
  }
};

// testing function
const testingResult = arithmeticCalculator(20, 30, "-");
console.log(testingResult);
