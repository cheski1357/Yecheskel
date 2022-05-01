const theHtml = document.querySelector('div');
const theButton = document.querySelector('button');
const theInput = document.getElementById('username');
const theForm = document.getElementById('form')
console.log(theButton);
console.log(theHtml.style.color);

theHtml.setAttribute('style', 'color:green');

theButton.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(theForm.value)

})

let launchMissiles = function() {
    missileSystem.launch("now");
  };
  


  launchMissiles();



