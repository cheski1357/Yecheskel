'use strict';

const theBox = document.getElementById('myTesting');
const myTable = document.getElementById('theTable');
let theInterval = null;
let i = 0;
const colorArray = ['red', 'purple', 'green'];


function myIntreval() {
  theInterval = setInterval((function () {
      let theColor = colorArray[i++];
    theBox.style.backgroundColor = theColor;

    if (i >= colorArray.length) {
      i = 0;
    }
 const newRow = myTable.insertRow();
 const cellOne = newRow.insertCell(0);
 const cellTwo = newRow.insertCell(1);
 

 newRow.addEventListener('click', function () {
clearInterval(theInterval);
theBox.style.backgroundColor = theColor;







});

 const x = document.createElement('button');
 
 
 const now = new Date();
 cellOne.innerHTML=now.toLocaleString();
 cellTwo.innerHTML=theColor;




  }     ), 500  )  




}

document.getElementById('theButton').innerText = 'start';


document.getElementById('theButton').addEventListener('click', function () {

  if (theInterval
 === null) {

    document.getElementById('theButton').innerText = 'stop';
    myIntreval()
  }

  else {
    document.getElementById('theButton').innerText = 'start';
    clearInterval(theInterval
  )
    theInterval
 = null;
  }


})
