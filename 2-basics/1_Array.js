// +++++++++++++++++ARRAY+++++++++++++++++++++++++++++

// array : It is an object data type, in this we can store collections of items in single variable name
// JS array is resizable
// mixup items we can store
const myArr = [0, 10, 20, 30, 40, 50, true, "Seemant"];
console.log(myArr);
// array elements can not be accessed using arbitrary strins as indexes
// array is '0' based indexing
// copy operations : array make shallow copies
// shallow copies : Its copy whose properties share the same references as those of the source object from which the copy was made.
// deep copies : Properties do not share the same refernces

// ways to define an array
const myHeroes = ["Shaktiman", "Iron Man", "Bat Man"];
const myArr2 = new Array(1, 2, 3, 4, 5);

// ++++++++++++++++++ARRAY METHODS+++++++++++++++++

// push() : insert element from end of an array
myArr.push(6);
console.log(myArr);

// pop() : delete last element from array
myArr.pop();
console.log(myArr);

// unShift(): insert element from start of an array
myArr.unshift(0);
console.log(myArr);

// shift() : deleted element from start of an array
myArr.shift();
console.log(myArr);

// includes() : return boolean that element is present of not
console.log(myArr.includes("Seemant"));

// indexOf() : return index of element which is present in array
console.log(myArr.indexOf(30));

// join() : adds all the element in an array in form of string || convert and bind in the form of string
const newArr = myArr.join();
// console.log(typeof newArr); string

// slice() : return section of an array but make new array not change original array
const myNewArr1 = myArr.slice(1, 3);
console.log(myNewArr1);

// splice() : return section of an array but change original array
const myNewArr2 = myArr.splice(1, 3);
console.log(myNewArr2);
