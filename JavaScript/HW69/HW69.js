
(function () {
    'use strict';
    console.log('testing')

    const clockElem = document.createElement('div');
    document.body.appendChild(clockElem);

    clockElem.style.border = '3px solid blue';
    clockElem.style.display = 'inline-block';
    clockElem.style.padding = '1em';
    clockElem.style.fontSize = '2em';
    clockElem.style.fontWeight = 'bold';
    clockElem.style.color = 'yellow';
    clockElem.style.backgroundColor = 'black';

    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function twoDigits(n){
        if (n < 10){
            n=`0${n}`

        }
        return n;
    }

    function updateClock() {


        if (++seconds === 60) {
            seconds = 0;


            if (++minutes === 60) {
                minutes = 0;


                if (++hours === 24) {
                    hours = 0;
                }
            }
        }

        clockElem.innerText = `${hours}:${twoDigits (minutes)}:${twoDigits (seconds)}`
    }
    updateClock();
    setInterval(updateClock, 10);



}());


