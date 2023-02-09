'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr) => {
    let max;
    max = arr[0];
    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > max) max = arr[i]; else continue;
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr) => {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (typeof arr[i] === "number") sum += arr[i]; else continue; //This method can be used to distinguish numbers if (arr[i] == +arr[i])
    }
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']
//const reverseArray = (arr) => {
    //     let temp;
    //     let helperArray=[];
    //     let end=arr.length-1;
    //     for(let i=0;i<=end;i++){
    //         temp=arr.pop();
    //         helperArray.push(temp)
    //       }
    //       arr=[...helperArray]// this is Spread Operator it is use to copy array to another array.
    //       return arr;// and i can return helperArray directly.
    // }
    // -------------------------------------------------------------------------------------------------------
    // another solution
    const reverseArray = (arr) => {
        let temp;
        let start = 0;
        let end = arr.length - 1;
        for (let i = start; i <= end; i++) {
            if (i >= end - i) return arr;
            temp = arr[i];
            arr[i] = arr[end - i];
            arr[end - i] = temp;
        }
    }


    module.exports = { findMax, sumNums, reverseArray };