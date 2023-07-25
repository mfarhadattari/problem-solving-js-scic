/* Task-8: Implement a JavaScript function to find the second smallest element in an array of numbers. */

// defining function
const secondSmallestOfArray = (arrayOfNumbers) => {
  let smallest = arrayOfNumbers[0];
  let secondSmallest = arrayOfNumbers[1];
  arrayOfNumbers.forEach((eachNumber) => {
    if (eachNumber < smallest) {
      secondSmallest = smallest;
      smallest = eachNumber;
    } else if (eachNumber > smallest && eachNumber < secondSmallest) {
      secondSmallest = eachNumber;
    }
  });
  return secondSmallest;
};

// testing function
const testingResult = secondSmallestOfArray([3, 4, 5, 1, 2, 7]);
console.log(testingResult);
