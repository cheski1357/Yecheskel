'use strict';
const nums = [1, 34, 5, 78, 23, 8, 17, 19, 86, 13];
console.log(nums);


function findMax(arr, checkUpTo) {
    let biggestGuy = arr[0];
    for (let i = 0; i < checkUpTo; i++) {
        if (arr[i] > biggestGuy) {
            biggestGuy = arr[i];

        }
    }
    return biggestGuy;
}

function theSort(arr) {

    let temp;
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i];
        // temp = arr[arr.length - (i + 1)];
        let ithMax = findMax(arr, arr.length - i);
        arr[arr.length - (i + 1)] = ithMax;
        arr[arr.length - i] = temp;
    }
    return arr;
}

theSort(nums)

const theResult = theSort(nums);
console.log(theResult);

const nums2 = [1, 2, 3, 8];


function biggestNum(nums) {

    let theBiggest = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > theBiggest) {
            theBiggest = nums[i];
        }
    }

    return theBiggest;
}

function theSwap(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {

        arr[0] = biggestNum(arr);
        arr[arr.length - 1] = temp;
    }
    return arr;
}



const numsArray = [1, 1, 3, 4];

const resultOfArray = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];

    }
    return total

}

console.log(resultOfArray(numsArray));


const letsSort = function (arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
  return arr;
}

const letsSort2 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
       letsSort(arr)
       
}

    return arr;
}

const arr1 =[92342, 23,345,5, 45,980,34,1,14, 1]
const arr2 = [2, 13, 11, 1, 25, 45, 678, 22];
const arr3 = ['ayaal','aat','ben','theo','aaaaft']
console.log(arr2)
console.log(letsSort(arr2))
console.log(letsSort2(arr2))
console.log(arr1)
console.log(letsSort(arr1))
console.log(letsSort2(arr1))
console.log(arr3);
console.log(letsSort(arr3))
console.log(letsSort2(arr3))
console.log(arr1.sort())