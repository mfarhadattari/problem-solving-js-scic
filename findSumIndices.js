/* Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. */

// defining function
const findSumIndices = (sortedArray, targetValue) => {
  let leftPointer = 0;
  let rightPointer = sortedArray.length - 1;
  while (leftPointer < rightPointer) {
    const [a, b] = [sortedArray[leftPointer], sortedArray[rightPointer]];
    let currentSum = a + b;
    if (currentSum === targetValue) {
      return [a, b];
    } else if (currentSum > targetValue) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }
};

// testing
const testingResult = findSumIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12);
console.log(testingResult);
