const potus = {
    first: 'Joe',
    last: 'biden',
    cabint: ['Theo', 'Pete', 'Kamala'],
    logCabinet: function () {
        this.cabint.forEach(ca => console.log(ca))
    },
    printThis: () => { console.log(potus) },
    printTHis2: function () {
        console.log(this)
    }
}


potus.printThis();
potus.logCabinet();




const nums = [11, 34, 39, 23, 234];

function pick2(arr) {

    let newArray = [];
    for (let i = 0; i < arr.length; i++) {

    }
    return arr;
}
console.log(nums)
console.log(nums.slice(0, 3));


let result = nums.map(function (e, a) {
    //a is index number
    console.log(e, a);


    return e % 2 === 0;
});
console.log(result)

const nums12 = [12, 123, 26, 17, 45, 435, 34, 4, 6, 1, 3, 5, 45, 78, 99];


function getCombinations(valuesArray) {

    var combi = [];
    var temp = [];
    var slent = Math.pow(2, valuesArray.length);

    for (var i = 0; i < slent; i++) {
        temp = [];
        for (var j = 0; j < valuesArray.length; j++) {

            if (i & Math.pow(2, j)) {
                temp.push(valuesArray[j]);

            }

        }

        if (temp.length > 0) {
            combi.push(temp);
        }
    }

    combi.sort((a, b) => a.length - b.length);
    console.log(combi.join("\n"));
    return combi;
}

console.log(getCombinations(nums12))

/////////////////////////////////////////////////////////////////////////////


const thisArray = [3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < thisArray.length; i++) {
    let newArray = [];
    newArray.push(thisArray[i])
    console.log(newArray)
    for (let j = 0; j <= 6; j++) {
        newArray.push(thisArray[i]);
        // console.log(newArray)
    }
}




// let thisFunction = function (arr) {

//     let temp = [];
//     let combi = [];
//     for (let i = 0; i <= arr.length; i++) {
//         temp.push(arr[i]);
//         console.log(arr[i]);

//         for (let j = 0; j < 6; j++) {
//             combi.push(arr[j])
//         }

//         return combi;

//     }
// }
// console.log(thisFunction(thisArray));

var letters = ["a", "b", "c", "d"];
var combi = [];
var temp = "";
var letLen = Math.pow(2, letters.length);

for (var i = 0; i < letLen; i++) {
    temp = "";
    for (var j = 0; j < letters.length; j++) {
        if ((i & Math.pow(2, j))) {
            temp += letters[j]
        }
    }
    if (temp !== "") {
        combi.push(temp);
    }
}

console.log(combi.join("\n"));

const lnumbers = [1, 2, 3, 4];

let combi2 = [];
let temp2 = "";

for (let i = 0; i <= 6; i++) {
    temp2;
    console.log(temp2)
    for (let j = 0; j < lnumbers.length; j++) {
        if (i & 6) {
            temp2 += lnumbers[j];
        }
        if (temp2 !== "") {
            combi2.push(temp2);
        }
    }
}
//console.log(combi2.join("\n"));

const lnumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

let larray =[];
let ltemp =[];
for(let i=0; i<=1; i++){
    for(let j=0; j<lnumbers2.length; j++){
     ltemp.push(lnumbers2)
    }
//     larray.push(ltemp)
// ltemp.push(lnumbers2)
    
}
console.log(ltemp);

const loopNums = [1,2,3,4];
for(let i=0;i<=1;i++){
    if(i&1){
        console.log(loopNums[i])
    }
   
 console.log(loopNums+'');
    for(let j=0; j<loopNums.length;j++){
        console.log(loopNums)
 
    }
}




