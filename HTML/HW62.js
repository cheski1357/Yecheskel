'use strict';

// 1 - Write a dayOfweek module / Immediately Invoked Function Expression
//  that is similar to the monthName module we wrote in class.
//   The module should return an object that has 2 functions:

// a)getDayName that takes a number and returns the name of the appropriate 
// day e.g. 0 = Sunday (or you could make it 1 based instead of 0 if you like, 
//     that would actually probably be more useful.)
// b)getDayNumber that takes a day name and returns the day number




  const mu = (function () {
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
     "Thursday", "Friday", "Saturday"];
  
    function getDay(index) {
        return dayOfWeek[index-1];
      }
      
      function getIndex (dayOfWeek) {
     return dayOfWeek.findIndex(n => n.toLowerCase() === dayOfWeek.toLowerCase()) + 1;
      }

   
 return {
      getDay: getDay,
      getIndex: getIndex
    };
  }());
  
  console.log('mu.getIndex("january")', mu.getIndex('january'));
  console.log('mu.getDay(1))', mu.getDay(1));
  



//   2)Write an Interest calculator module/IIFE that exposes functions allowing
//    you to set the interest rate and the number of years, and lets you call a 
//  calculate function passing in a principal amount and it will return the 
//  total amount of interest you would pay at the given rate and number of years.
//   Interest rate and number of years should be PRIVATE module data, and nothing
//   should be in the global namespace besides the one object returned which
//   exposes only the 3 functions - calculate, setRate and setYears 
//     (not terribly useful but hey, it's practice).



const intrestRateCalculator = (function(){
 let interestRate=0;
 let years =0;
 function setRate(rate){
     interestRate=rate;
 }
 function setYears(yrs){
     years=yrs;

 }
 function calculate(amount){
     for(let i=0; i)}

    return{
        setRate: setRate,
        setYears: setYears,
        calculate:calculate
    }
}());

