'use strict'



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];



function myEvery(theArray, test) {
for (let i = 0; i < theArray.length; i++) {
        if (!test(theArray[i])) {
            return false;
        }
    }

    return true;
}

console.log(myEvery(numbers, p=> p%78!==0));
console.log(myEvery(numbers, p=> p%6===0));

let theseLetters = ['chaim','jeremy','vanGogh'];

console.log(myEvery(theseLetters, p=>p!='kyle'));
console.log(myEvery(theseLetters, p=>p=='chaim'));

let theseABCs =['a', 'b', 'c'];
let theseABCs2 =['A','B','C'];


console.log(myEvery(theseABCs,  (letter => letter=== letter.toUpperCase())));
console.log(myEvery(theseABCs2,  (letter => letter=== letter.toUpperCase())));
console.log(myEvery(theseABCs,  (letter => letter=== letter.toLowerCase())));
console.log(myEvery(theseABCs2,  (letter => letter=== letter.toLowerCase())));


x = 5;
y = '5';
console.log(x, y)