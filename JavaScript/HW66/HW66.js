'use strict';

const myVar = document.getElementById('myTesting');
let theIntravel = null;
let i = 0;
const colorArray = ['red', 'purple', 'green'];
const myTable = document.getElementById('theTable');

function myIntreval() {
  theIntravel = setInterval((function () {
      let theColor = colorArray[i++];
    myVar.style.backgroundColor = theColor;

    if (i >= colorArray.length) {
      i = 0;
    }
 const newRow = myTable.insertRow();
 const cellOne = newRow.insertCell(0);
 const cellTwo = newRow.insertCell(1);
 const cellThree = newRow.insertCell(2);

 newRow.addEventListener('click', function () {

  console.log(theColor);


});

 const x = document.createElement('button');
 
 
 const now = new Date();
 cellOne.innerHTML=now.toLocaleString();
 cellTwo.innerHTML=theColor;




  }     ), 500  )  




}

document.getElementById('theButton').innerText = 'start';


document.getElementById('theButton').addEventListener('click', function () {

  if (theIntravel === null) {

    document.getElementById('theButton').innerText = 'stop';
    myIntreval()
  }

  else {
    document.getElementById('theButton').innerText = 'start';
    clearInterval(theIntravel)
    theIntravel = null;
  }


})
