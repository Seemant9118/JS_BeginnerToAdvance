// map() : Iterate and mutate array element but return in new array, so we can store in vairable

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const add10InEachNumbers = myNumbers.map((num) => num + 10);
console.log(add10InEachNumbers);

// chaining : we can use multiple array method as chaining
const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNums);
