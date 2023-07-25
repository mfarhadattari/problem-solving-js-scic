/* Task 3: Write a JavaScript program to find the most frequent element in an array and return it. */

// defining function
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

// testing function
const testResult = mostFrequentElement([1, 1, 2, 2, 3, 3]);
console.log(testResult);
