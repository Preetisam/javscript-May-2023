//Area of the triangle

var side1 = 5;
var side2 = 6;
var side3 = 7;

function area() {
  var sides = (side1 + side2 + side3) / 2;
  var areaOfTrinagle = Math.sqrt(
    sides * ((sides - side1) * (sides - side2) * (sides - side3))
  );

  return areaOfTrinagle;
}
var triangle = area(side1, side2, side3);
console.log(triangle); //14.696938456699069

// Write a function that takes two numbers as arguments and returns their sum.
let p = 5,
  q = 7;
function additionOfTwoNumbers() {
  let r = p + q;
  return r;
}
let s = additionOfTwoNumbers(p, q);
console.log(s); //12

// Write a function that takes a string as an argument and returns the string in reverse order.

let string = "preeti";
function reverseString1() {
  let arr = string.split("");
  arr = arr.reverse();
  let reverseStr = arr.join("");

  return reverseStr;
}

console.log(reverseString1());

let string1 = "kamilla preeti samuel";
function reverseString2() {
  let str = string1.split(" ");
  str = str.reverse();
  let reversedStr = str.join(" ");
  return reversedStr;
}

console.log(reverseString2()); //samuel preeti kamilla

// Write a function that takes an array of numbers as an argument and returns the largest number in the array.
let arr = [1, 23, 43, 12, 34, 56, 13, 5];
function largestNumberInArray() {
  let lagrestNum = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > lagrestNum) {
      lagrestNum = arr[i];
    }
  }
  return lagrestNum;
}
let finalOutPut = largestNumberInArray(arr);
console.log(finalOutPut);
// Write a function that takes an array of numbers as an argument and returns the samllest number in the array.

let arr2 = [67, 89, 96, 34, 23, 54, 25, 27];
function samllestNumInArray() {
  let samllestNum = arr2[0];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < samllestNum) {
      samllestNum = arr2[i];
    }
  }
  return samllestNum;
}
let finalOutPut1 = samllestNumInArray(arr2);
console.log(finalOutPut1);

// Write a function that takes an object as an argument and returns an array of all the values in the object.

let obj = {
  name: "preeti",
  age: 31,
  highestEducation: "M pharmacy",
};
function convertObjectIntoArray() {
  let arrValues = [];
  for (let key in obj) {
    arrValues.push(obj[key]);
  }
  return arrValues;
}
let outPut = convertObjectIntoArray(obj);
console.log(outPut);
////////////////////////////////////////////////////////////////////

let object1 = {
  studentName: "kamilla preeti samuel",
  department: "Full stack developer",
  studentId: 007,
};
function studentObjectToArray() {
  let arr = [];
  for (let key in object1) {
    arr.push(object1[key]);
  }
  return arr;
}
let newOutPut = studentObjectToArray(obj);
console.log(newOutPut);

// Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.

function filterOfLongestString(arr4) {
  let filteredArr = [];
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i].length > 5) {
      filteredArr.push(arr4[i]);
    }
  }
  return filteredArr;
}

let arr4 = [
  "Elena",
  "Grace",
  "Pushparaj",
  "Preeti",
  "Sam",
  "Sudheer",
  "Jyothi",
  "Priyatham",
];
let filteredArr = filterOfLongestString(arr4);
console.log(filteredArr);

// ////////////////////////////////////////////////
// Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length less than 5.

function filterTheSmallestString() {
  let filteredArr2 = [];
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i].length < 5) {
      filteredArr2.push(arr5[i]);
    }
  }
  return filteredArr2;
}
let arr5 = ["Elena", "Pushparaj", "Preeti", "Sam", "Paul", "Ruth"];
let filteredArr2 = filterTheSmallestString(arr5);
console.log(filteredArr2);
