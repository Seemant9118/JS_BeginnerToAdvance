const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// filteration using forEach (traditional way)
// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 5) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

// filter method: filter the array by given some condition
// const filterNums = myNums.filter((num) => {
//   return num > 5;
// });
// console.log(filterNums);

// EXAMPLE : filteration in books array on the basis of user need
// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "History", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
// ];

// // filter 1 : only history books
// const historyBooks = books.filter((book) => book.genre === "History");
// console.log(historyBooks);

// // filter 2 : only latest history books
// const twentyOneCenturyBooksPublish = books.filter(
//   (book) => book.publish >= 2000 && book.genre === "History"
// );
// console.log(twentyOneCenturyBooksPublish);
