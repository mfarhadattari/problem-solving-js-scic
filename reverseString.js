/* Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. */

// declaring function
const reverseString = (string) => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
  }
  return reversedString;
};

// testing
const test = reverseString("Hello");
console.log(test);
