const marvelHeroes = ["thor", "Iron Man", "Captain America"];

const dcHeroes = ["Superman", "Wonder Woman", "Bat Man"];

// I. PROBLEM : For merging Two arrays Methods+++++++++++++++

// push()
// In this case , whole array store in an array , store in form of sub array
// marvelHeroes.push(dcHeroes); // not a good way to merge two array
// console.log(marvelHeroes[3][1]);

// concat() : merge two arrays but return in new array
const mergeNewArr = marvelHeroes.concat(dcHeroes);
console.log(mergeNewArr);

// spread ... : preferable operation
const all_new_heroes = [...marvelHeroes, ...dcHeroes];
console.log(all_new_heroes);

// II. PROBLEM : If we have mutiple subarray then we have to fllaten all the array+++++++++++++++++++
// SOLUTION : flat(): Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const formatter_Arr = another_arr.flat(Infinity);
console.log(formatter_Arr);

// III. PROBLEM : If we get any type of format data but we need to convert in the form of array to traversal loop
console.log(Array.isArray("Hitesh")); // string

// SOLUTION : from() - convert any type of data into an array
console.log(Array.from("Hitesh")); // conversion

// object case
console.log(Array.from({ name: "Seemant" })); // intresting case

// IV. PROBLEM : n no. of variables, Convert into an array
let score1 = 100;
let score2 = 200;
let score3 = 300;
// SOLUTION : of()
console.log(Array.of(score1, score2, score3));
