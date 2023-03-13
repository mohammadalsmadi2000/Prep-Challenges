'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    const array = str.split(" ");
    const tracking = (Math.floor(array.length / 2))
    return array[tracking].length
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    const arrStr1 = str1.split("");
    const arrStr2 = str2.split("");

    for (const el of arrStr1) {
        const index = arrStr2.indexOf(el);
        if (index == -1) return false;
        arrStr2.splice(index, 1);
    }

    if (arrStr2.length === 0) return true; else return false;

}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    const findOut = arr.indexOf(int);
    let iterations = arr.length;
    
    if (findOut === -1) {
        for (const el of arr) {
            if (el > int) return (arr.indexOf(el))
            if (!--iterations) return arr.length;// i use it to detect last iteration in for-of loop
        }
    }
    return findOut;
}

// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };