'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//



const recursionPattern = (int1, int2) => {
    const helperArray = [int1];

    function helperFunc(val, diff) {
        const nextVal = val - diff;
        if (nextVal < 0) {
            diff = -diff
        }
        if (nextVal == int1) {
            helperArray.push(nextVal);
            return;
        }
        helperArray.push(nextVal);
        helperFunc(nextVal, diff);
    }
    helperFunc(int1, int2)
    return helperArray;

};



// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    const indexHelper = str.indexOf('href') + 13;
    const indexHelper2 = str.indexOf('"', indexHelper + 1);
    const resString = str.slice(indexHelper, indexHelper2);
    return resString;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    const regx = /^[A-Za-z]+$/
    let strNew = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regx)) {
            strNew += str[i]
        } else continue;
    }
    let normalArray = strNew.toLowerCase().split("")
    let reverseArray = strNew.toLowerCase().split("").reverse();
    if (JSON.stringify(normalArray) === JSON.stringify(reverseArray)) return true; else return false;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern

//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true

//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same

//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false

//  here if the pattern had three different things so the array should had 3 different things to be true


const samePattern = (str, arr) => {

    if (str.length !== arr.length) {
      return false;
    }
  
    const objChars = {};
    const objWords = {};
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const word = arr[i];
  
      if (!objChars[char]) {
        objChars[char] = word;
      } else if (objChars[char] !== word) {
        return false;
      }
  
      if (!objWords[word]) {
        objWords[word] = char;
      } else if (objWords[word] !== char) {
        return false;
      }
    }
  
    return true;
  };
  
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };