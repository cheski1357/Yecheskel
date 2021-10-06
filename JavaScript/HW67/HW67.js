const theBox = document.createElement('div');
theBox.style.height='300px';
theBox.style.width='300px';
theBox.style.backgroundColor='aqua';

document.body.appendChild(theBox);

const theButton = document.createElement('button');
theButton.innerText='click here!'

theBox.appendChild(theButton);

theButton.addEventListener('click', function(){

theBox.style.display='none';

})
