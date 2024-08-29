// REDUCE : Is generally used , to sum up all the elements of array

// SYNTAX
// reduce(callBackFunc,initialValue); callBackFunc(accumulator,currentValue);

// EXAMPLE : Total SUM
// const myNums = [1, 2, 3];
// const myTotalOfNums = myNums.reduce((acc, currVal) => {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);

// console.log(myTotalOfNums);

// EXAMPLE : It is a cart, I want to show total bill amount to pay
// const shoppingCart = [
//   { title: "Book One", genre: "Fiction", publish: 1981, price: 2000.3 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, price: 1200.5 },
//   { title: "Book Three", genre: "History", publish: 1999, price: 2300.5 },
// ];
// const totalAmtToPay = shoppingCart.reduce((accumulator, item) => {
//   return accumulator + item.price;
// }, 0.0);
// console.log(`Total Amount to pay for your shopping is : ${totalAmtToPay}`);
