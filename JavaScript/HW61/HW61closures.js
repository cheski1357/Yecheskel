'use strict';

// 1 - Write a function, multiply, that takes two numbers as parameters and returns the product.
// Call it several times and use console.log to show its producing correct results.

function multiply(a, b) {
    return a*b;
    
    
}
console.log(multiply(13,3));
console.log(multiply(3, 11));
console.log(multiply(17,3));

// 2 - Do the same as #1 above but this time 
// write a function getMultiplier that RETURNS
//  A FUNCTION EXPRESSION that can multiply 2 numbers.
//   Call it to get the multiply function and then use 
//   the function you get to multiply some numbers.
//    Use console.log to prove its producing correct results. 
//    (This is like the getBetterGreeter function in closures.js from class). 

function getMultiplier(){
    return function(a,b){
        console.log(a+' x '+ b +' = ' +a*b);

    };
}

let x = getMultiplier();
x(5,7);
x(13,5);
x(3,11);


// 3 - Do the same as #2 above but this time make the outer getMultiplier function take the 
//first number and the returned function expression only take the second number but use the 
//first number from the outer parent function. In other words you should be able to do 
//something like the following:

//           var multiplyByFive = getMultiplier(5);
//           console.log(multiplyByFive(2)); // prints 10

//           var multiplyBySix = getMultiplier(6);
//           console.log(multiplyBySix(2)); // prints 12

//           (This is like the getBestGreeter function in closure.js)

function getMultiplier1(a) {
    return function (b){
        return a * b;
    };
}

let xyz= getMultiplier1(7);
console.log(xyz(4));
console.log(xyz(7));
console.log(xyz(5));

function getMultiplier2(a) {
    return function (b){
        console.log(a+' x ' +b+' = '+ a*b);
    };
}

let cx = getMultiplier2(3);
cx(13);
cx(17);
cx(39);



