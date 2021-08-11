'use strict';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



function myEvery(theArray, test) {
for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i])) {
            return true;
        }
    }

    return false;
}

console.log(myEvery(numbers, p=> p%78!==0));
console.log(myEvery(numbers, p=> p%6===0));

let theseLetters = ['chaim','jeremy','vanGogh'];

console.log(myEvery(theseLetters, p=>p!='kyle'));
console.log(myEvery(theseLetters, p=>p=='chaim'));

let theseABCs =['a', 'B', 'c'];




console.log(myEvery(theseABCs,  (letter => letter=== letter.toUpperCase())));

console.log(myEvery(theseABCs,  (letter => letter=== letter.toLowerCase())));




theseABCs.some(letter => letter=== letter.toUpperCase());
theseABCs.some(letter => letter=== letter.toLowerCase());

function mainGreet(){
    console.log('Hello');
}

function getGreet(){
    // return function(){
    //     console.log('Hello');


    // };
    return mainGreet;
}
let theGreet = getGreet();
theGreet();

function betterGreeter(){
    return function(name){
        console.log(`Hello ${name}`);
    };
}

let thisBetterGreeter= betterGreeter();
thisBetterGreeter('Theo');
