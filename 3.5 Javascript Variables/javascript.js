// JavaScript Variables can be declared in 4 ways:

//1. Automatically
//2. Using var
//3. Using let
//4. Using const (constant)

// variables declare:
// letters, numbers, underscore (_),dollorsign($)

//  1. Automatically variables;

x = 5;
y = 6;
z = x + y;

// Note:

/* It is considered good programming practice to always declare
   variables beore use.  */


// 2. Using var :

var x = 5;
var y = 6;
var z = x + y;

// Note:

// The var keyword was used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// The var keyword should only be used in code written for older browsers.


// 3. using let :

let x = 5;
let y = 6;
var z = x + y;


// 4. Using const:  (constant)

const x = 5;
const y = 6;
const z = x + y;


// 5. Mixed example:

const price1 = 5;
const price2 = 6;
let total = price1 + price2;


/*
  Variable Rules:

  1. No Javascript keywords name ,like - if ,var etc.
  2. should not start with numbers, like - 12Numbers .
  3. variable name starts with alphabets , like - Number12.
  4. No space & No - 
  5. use partialcase & camelCase & underscore keywords.
  6. Its Case-Sensitive
  7. Use Meaningfull Names
*/


// When to Use var, let, or const?

// 1. Always declare variables

// 2. Always use const if the value should not be changed

// 3. Always use const if the type should not be changed (Arrays and Objects)

// 4. Only use let if you can't use const

// 5. Only use var if you MUST support old browsers.

/* 6. let and const both are simillar, but let values you can modified.
        but const value you can't modified & changed.
*/

//Variables  - " var " , " let " , "const"

// var - keyword is Global,
// let - keyword is block,
// const - keyword if the value should not be changed.


// How to create variables:

var x; 
let y;

// variable syntax:

// var variable name = " variable value";
// let letvariable name = "letvariable value";

// styles of variable:

// 1. PartialCase style:
        var MyNameIs ="selva";

// 2. camelCase style:
        var myNameIs ="Tamil";

// underscore style:
        var my_name_is = "hello";

        alert(MyNameIs + my_name_is);
