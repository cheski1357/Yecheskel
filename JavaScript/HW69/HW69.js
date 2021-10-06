const clock = document.createElement('div');
document.body.appendChild(clock);



let i =0;

setInterval(function(){
   
    i++;
    clock.innerText=i + ' seconds';

}, 1000)
