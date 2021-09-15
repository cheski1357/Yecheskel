'use strict';

const myVar = document.getElementById('myTesting');
let theIntravel = null;
let i = 0;
const colorArray = ['red', 'purple', 'green'];

function myIntreval() {
  theIntravel = setInterval((function () {
    myVar.style.backgroundColor = colorArray[i++];

    if (i >= colorArray.length) {
      i = 0;
    }

  }), 1500)
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


