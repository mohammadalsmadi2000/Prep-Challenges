'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let str = [];
    let n = string.length
    for (let i = 0; i < string.length; i++) {
        str.push(string[n - i - 1]);
    }
    return str.join("");
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;


const detectFace = (arr=[]) => {
    let ar=arr.filter((el)=>{
      return el.includes("^_^")
    })
  return ar;
}

// another solution
// const detectFace = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let containsFace = false;
//     for (let j = 0; j < arr[i].length - 2; j++) {
//       if (arr[i][j] === '^' && arr[i][j + 1] === '_' && arr[i][j + 2] === '^') {
//         containsFace = true;
//         break;
//       }
//     }
//     if (containsFace) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"


const eveCharacter = (str) => {
    let positive = str.split("").filter((el,idx)=>{
      return idx%2==0
    })
   return positive.join("");
   
 }
// -------------------------------------------------------------------------------------------------------
// another solution 

// const eveCharacter = (str) => {
//   let result = '';
//   for (let i = 0; i < str.length; i += 2) {
//     result += str[i];
//   }
//   return result;
// }

// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let helper=[];
   for(const el of arr){
     for(const ele of el){
       if(ele.includes("chicken")){
         helper.push([ele]);
       }
     }
   }
   return helper;
 }
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
