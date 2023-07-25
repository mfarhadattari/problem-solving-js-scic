### Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

```javaScript
const reverseString = (string) => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }
  return reversedString;
};
```

### Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

```javaScript
const sumOfPositiveNumber = (arrayOfNumbers) => {
  const positiveNumbers = arrayOfNumbers.filter((eachNumber) => eachNumber > 0);
  const sumOfPositiveNumber = positiveNumbers.reduce((sum, eachNumber) => sum + eachNumber, 0);
  return sumOfPositiveNumber;
};
```

### Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

```javaScript
const mostFrequentElement = (array) => {
  let mostFrequentElement;
  let highestCount = 0;
  array.forEach((eachElement) => {
    const filtered = array.filter((eachItem) => eachElement === eachItem);
    mostFrequentElement = filtered.length > highestCount ? eachElement : mostFrequentElement;
    highestCount = filtered.length > highestCount ? filtered.length : highestCount;
  });

  return mostFrequentElement;
};
```
### Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

```javaScript
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
```
### Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, \*, /) as input and return the result of the operation.

```JavaScript
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
```
### Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

```javaScript
const passwordGenerator = (length) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    const index = Math.round(Math.random() * characters.length);
    password += characters[index];
  }
  return password;
};
```

### Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

```javaScript
const romanToDecimal = (romanNumeral) => {
  romanNumeral = romanNumeral.toUpperCase();
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
```

### Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

```javaScript
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
```
