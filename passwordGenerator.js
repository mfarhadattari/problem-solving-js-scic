/* Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. */

// defining function
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

// testing function
const testingResult = passwordGenerator(10);
console.log(testingResult);
