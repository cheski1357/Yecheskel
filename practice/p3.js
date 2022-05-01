// const lnumbers = [1, 2, 3, 4];

// let combi2 = [];
// let temp2 = "";

// for (let i = 0; i <= 8; i++) {
//   //  temp2;
//     console.log("i is "+i);
//     for (let j = 0; j < lnumbers.length; j++) {
//         console.log(i&9)
//         if (i & 6) {
//             temp2 += lnumbers[j];
//         }
//         if (temp2 !== "") {
//             combi2.push(temp2);
//         }
//     }
//     console.log(i&9)
// }

for (let i = 0; i <= 10; i++) {
    // console.log("i is "+i)
   // console.log(i, i & 0, i & 1, i & 2, i & 3, i & 4, i & 5, i & 6, i & 7, i & 8, i & 9, i & 10, i & 11)

}
console.log(0101 & 0001)
console.log(~90)
this.pool = [];
console.log(this.pool);

/////////////////////////////////////////////////////////////////////////////




const theTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

const result = [];
result.length = 2; //n=2

function combine(input, len, start) {
    if (len === 0) 
    {
        console.log(result.join(" ")); //process here the result
        return;
    }
    for (let i = start; i <= input.length - len; i++) {
        result[result.length - len] = input[i];
        combine(input, len - 1, i + 1);
    }
}

const array = [3,11,13, 17,31,34,37,39,47];
combine(theTestArray, result.length, 0);








