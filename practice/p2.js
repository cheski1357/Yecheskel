const nums = {
    first: 1,
    second: 2,
    third: 3
}

const Result = Object.entries(nums);
console.log(Result);

const nums2 = [ 34, 17, 68, 23, 10, 11, 230, 1,1,1];

// nums2.sort(function(a, b){
//     if(a < b) { return -1; }
//     if(a> b) { return 1; }
//     return 0;
// });

function sortLikeT(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] < arr[i+2]) { return -1; }
    else if(arr[i]> arr[i+2]) { return 1; }
     return 0
    }
}
console.log(sortLikeT(nums2))

function sort1 (arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }

     
    }
    return arr;
        }

        function sort2 (arr){
            for(let i=0; i<arr.length; i++){
                sort1(arr);
            }
            return arr;
        }


combine





