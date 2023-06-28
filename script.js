"use strict";

// Logical program questions.
// Set 1:
// 1.	Write a JavaScript program to calculate the factorial of a given non-negative integer.
// Sample Input: (5);
// Sample Output: 120

let factorial = (num) => {
  let factorialNum = 1;
  for (let i = 1; i <= num; i++) {
    factorialNum *= i;
  }
  console.log("Factorial : " + factorialNum);
  console.log("-----------------------");
};
factorial(5);

// 2.	Write a JavaScript function to find the maximum element in an array.
// Sample Input: ([5, 2, 9, 1, 7]);
// Sample output: 9

const maximum = (arr) => {
  console.log("maximum : " + Math.max(...arr));
  console.log("-----------------------");
};
maximum([5, 2, 9, 1, 7]);

// 3.	Write a JavaScript program to remove a specific element from an array.
// Sample Input: ([1, 2, 3, 4, 5], 3);
// Sample Output: [1, 2, 4, 5]

const removeElement = (arr, removeEl) => {
  let index = arr.indexOf(removeEl);
  arr.splice(index, 1);
  console.log("remove El : " + arr);
  console.log("-----------------------");
};
removeElement([1, 2, 3, 4, 5], 3);

// 4.	Write a JavaScript program to find the second smallest element in an array.
// Sample Input: ([5, 2, 9, 1, 7]);
// Sample Output: 2

const secondSmall = (arr) => {
  let array = arr.sort((a, b) => a - b);
  console.log("second smallest element in array : " + array[1]);
  console.log("-----------------------");
};
secondSmall([5, 2, 9, 1, 7]);

// 5.	Write a JavaScript function to check if two arrays are equal (contain the same elements in the same order).
// Sample Input: ([1, 2, 3], [1, 2, 3]);
// Sample output: true

const checkEqualArr = (arr1, arr2) => {
  let check;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      check = "true";
    } else {
      check = "false";
    }
  }
  console.log("Equal or Not : " + check);
  console.log("----------------------------");
};
checkEqualArr([1, 2, 3], [1, 2, 3]);

// 6.	Write a JavaScript program to find the maximum sum subarray within a given array of numbers.
// Sample Input: ([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// Sample Output: 6

function maxSubArraySum(arr) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = maxEndingHere + arr[i];
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }
  console.log("max sub array : " + maxSoFar);
  console.log("----------------------------");
}

maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// 7.	Write a JavaScript function to calculate the power of a number recursively.
// Sample Input: (2, 4);
// Sample Output: 16

let powerNum = Math.pow(2, 4);

console.log("Power number : " + powerNum);
console.log("-----------------------");

// 8.	Write a JavaScript function to sort an array of numbers in ascending order.
// Sample Input:5,2,9,1,8
// Sample Output:1,2,5,8,9

const sortArr = (arr) => {
  let newArr = arr.sort((a, b) => a - b);
  console.log("Sort Array in ascending : " + newArr);
  console.log("-----------------------");
};
sortArr([5, 2, 9, 1, 8]);

// 9.	Write a JavaScript function to find the number of occurrences of a substring in a given string.
// Sample Input: ("Hello, hello, hello", "hello");
// Sample Output: 3

const findSubString = (string, sub) => {
  let count = 0;
  let str = string.split(" ");
  str = str.map((str) => str.toUpperCase());
  for (let i = 0; i < str.length; i++) {
    if (str[i] == sub.toUpperCase()) {
      count += 1;
    }
  }
  console.log("substring : " + count);
  console.log("-------------------");
};
findSubString("Hello , hello , hello", "hello");

// 10.	Write a JavaScript function to find the intersection of two arrays without duplicates.
// Sample Input: ([1, 2, 2, 3], [2, 3, 4]);
// Sample Output: [2, 3]

const intersection = (arr1, arr2) => {
  const commonNum = [];
  const removeDuplicate1 = new Set(arr1);
  const removeDuplicate2 = new Set(arr2);
  for (const el of removeDuplicate2) {
    if (removeDuplicate1.has(el)) {
      commonNum.push(el);
    }
  }
  console.log("common Element : " + commonNum);
  console.log("-----------------------------");
};
intersection([1, 2, 2, 3], [2, 3, 4]);

//set-2

// 1.	Write a JavaScript program to find the length of a given string.
// Sample Input: Hello;
// Sample Output: 5
// 2.	Write a JavaScript function to concatenate two arrays.
// Sample Input: ([1, 2, 3], [4, 5, 6]);
// Sample Output: [1, 2, 3, 4, 5, 6]
// 3.	Write a JavaScript program to swap the values of two variables.
// Sample Input: x = 5, y = 10;
// Sample Output: [10, 5]

// 4.	Write a JavaScript program to calculate the average of an array of numbers.
// Sample Input: ([1, 2, 3, 4, 5]);?KJD
/// Sample Ouput: 3
// 5.	Write a JavaScript function to find the largest and smallest elements in an array.
// Sample Input: ([1, 2, 3, 4, 5]);
// Sample Output: [1, 5]
// 6.	Write a JavaScript function to find the index of the first occurrence of a given element in an array.
// Sample Input: ([1, 2, 3, 4, 5], 3);
// Sample Output: 2
// 7.	Write a JavaScript function to check if a given string is a valid email address.
// Sample Input: ("test@example.com");
// Sample Output: true
// 8.	Write a JavaScript program to count the number of occurrences of each element in an array.
// Sample Input: ([1, 2, 2, 3, 3, 3]);
// Sample Output: {1: 1, 2: 2, 3: 3}
// 9.	Write a JavaScript function to implement a binary search algorithm on a sorted array.
// Sample Input: ([1, 2, 3, 4, 5], 4);
// Sample output: 3
// 10.	Write a JavaScript program to find the intersection of two arrays (common elements).
// Sample Input: ([1, 2, 3], [2, 3, 4]);
// Sample Output: [2, 3]
