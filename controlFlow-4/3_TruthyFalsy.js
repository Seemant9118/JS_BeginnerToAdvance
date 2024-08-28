// FALSY VALUES :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES:
// "0", "false", " ", [], {}, function(){},

const emptyArr = [];
if (emptyArr.length > 0) {
  console.log("Array in not Empty");
} else {
  console.log("Array in Empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length > 0) {
  console.log("Object is not empty");
} else {
  console.log("Object is Empty");
}

//++++++++++ Nullish Coalescing Operator (??) : null,undefined+++++++++
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 19 ?? 7;
// console.log(val1);

// ++++++++ Ternary Operator +++++++++++++++++++++++++++
// SYNTAX : condition ? true : false ;

const iceTeaPrice = 100;
iceTeaPrice <= 80
  ? console.log("less than 80 : CHEAP")
  : console.log("More than 80 : Not Budget Friendly");
