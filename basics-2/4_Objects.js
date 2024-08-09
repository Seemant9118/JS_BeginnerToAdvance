// singleton object - when we declare object using constructor

const tinderUser = new Object();

tinderUser.id = "a2ved";
tinderUser.name = "Peter";
tinderUser.isAvailable = false;

console.log(tinderUser);

// nested objects
const regularUser = {
  email: "some@gmail.com",
  fullName: {
    username: "Peter@123",
    userdetail: {
      age: 22,
      mobileNumber: "7317317132",
    },
  },
};
console.log(regularUser?.fullName?.userdetail?.mobileNumber);

// how to merge objects
const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};
const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const newCloneObj = { ...obj1, ...obj2 };
console.log(newCloneObj);

// +++++++++++Objects Methods+++++++++++++++++
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isAvailable"));
