/* Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. */

// defining function
const sumOfPositiveNumber = (arrayOfNumbers) => {
  const positiveNumbers = arrayOfNumbers.filter((eachNumber) => eachNumber > 0);
  const sumOfPositiveNumber = positiveNumbers.reduce((sum, eachNumber) => sum + eachNumber, 0);
  return sumOfPositiveNumber;
};

// testing
const test = sumOfPositiveNumber([1, -2, 4, 4.5, -5, 1, 4, 0]);
console.log(test);
