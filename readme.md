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

### Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

### Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, \*, /) as input and return the result of the operation.

### Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

### Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

### Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
