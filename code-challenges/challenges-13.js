'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
// 
// Given an array of objects, count the objects by using reduce method.

// Input:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//
// Output: 5

const objectCounter = (obj = []) => {
    // write your code here
    const count = obj.reduce((ac, cv) => {
        ac++;
        return ac;
    }, 0)
    return count
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Given a string input as an argument reverse it using reduce method.
//
// Input: 'you shall not pass' 
// Output: 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

// const stringReverse = (str) => {
//     const helperArray = str.split(" ");
//     const reverse = helperArray.reverse().reduce((ac, cv, idx) => {
//         if (idx === helperArray.length - 1) ac += cv;
//         else ac += cv + " ";
//         return ac
//     }, "")
//     return reverse;

// }

const stringReverse = (str) => {
    return str.split(' ').reduce((ac, cv) => {
        return cv + (ac === '' ? '' : ' ') + ac;
    }, '');
};
//another solution without reduce
// const helperArray=str.split(" ");
// console.log(helperArray.reverse().join(" "));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
// 
// Using the same array of objects from the first question, create new object that contains the candidates names as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//

const statistics = (obj = []) => {
    const res = obj.reduce((ac, cv) => {
        if (!ac.hasOwnProperty(cv.votes_To)) {
            ac[cv.votes_To] = 1
        } else {
            ac[cv.votes_To] += ac[cv.votes_To]
        }
        return ac;
    }, {})
    return res;
}

//another solution 
// const statistics = (obj=[]) => {
// return obj.reduce((acc, current) => {
//   const name = current.votes_To;
//   acc[name] = acc[name] ? acc[name] + 1 : 1;
//   return acc;
// }, {});
//   };
// -------------------------------------------------------------------------------------------------------


module.exports = { objectCounter, stringReverse, statistics };