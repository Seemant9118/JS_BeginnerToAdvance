// FOR EACH

// const coding = ["js", "ruby", "java", "python", "cpp"];
// coding.forEach((item) => {
//   console.log(item);
// });

// 0.Parameters have in forEach : eachItem of an array , index of an array , whole array
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// 1.EXAMPLE : For explicit function call in forEach Loop
// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// 2.EXAMPLE : ITERATE ARRAY OF OBJECTS
// const myPlaylist = [
//   {
//     songName: "Haaye Mera Dil",
//     singer: "Yo Yo Honey Singh",
//   },
//   {
//     songName: "Tum ho",
//     singer: "Mohit",
//   },
//   {
//     songName: "Dawgs",
//     singer: "HanumanKind",
//   },
// ];

// myPlaylist.forEach((song) => {
//   console.log(`My Favourite song is "${song.songName}" of "${song.singer}"`);
// });

// forEach : Does not return any value/item and mutate in original array, so we can't store in variable.
// forEach wokring in original array not return copy of it
// const values = coding.forEach((item) => {
//   return item;
// });

// console.log(values);
