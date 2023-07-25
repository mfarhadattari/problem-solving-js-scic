/* Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. */

// defining function
const romanToDecimal = (romanNumeral) => {
  const romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let totalDecimal = 0;
  let previousDecimal = 0;
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    const currentDecimal = romanValues[romanNumeral[i]];
    if (currentDecimal >= previousDecimal) {
      totalDecimal += currentDecimal;
    } else {
      totalDecimal -= currentDecimal;
    }
    previousDecimal = currentDecimal;
  }
  return totalDecimal;
};

// testing function
const testingResult = romanToDecimal("XXI");
console.log(testingResult);
