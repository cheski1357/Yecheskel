

// 1 - Write a dayOfweek module / Immediately Invoked Function Expression
//  that is similar to the monthName module we wrote in class.
//   The module should return an object that has 2 functions:

// a)getDayName that takes a number and returns the name of the appropriate 
// day e.g. 0 = Sunday (or you could make it 1 based instead of 0 if you like, 
//     that would actually probably be more useful.)
// b)getDayNumber that takes a day name and returns the day number




  const mu = (function () {
  'use strict';
  
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
     "Thursday", "Friday", "Saturday"];
  
    function getDay(index) {
        return dayOfWeek[index-1];
      }

      
      function getIndex (day) {
     //return dayOfWeek.findIndex(day => dow === day.toLowerCase()) + 1;
     for(let i = 0; i < dayOfWeek.length; i++) {
       if(dayOfWeek[i] === day){
     return i+1;
    }}
  
    // return days.findIndex(function (dayOfWeek) {
    //   return dayOfWeek.toLowerCase();
    // }) + 1;
      
  
    }

   
 return {
      getDay: getDay,
      getIndex: getIndex
    };
  }());
  
  console.log(mu.getIndex("Monday"));
  console.log('mu.getDay(1))', mu.getDay(1));
  



//   2)Write an Interest calculator module/IIFE that exposes functions allowing
//    you to set the interest rate and the number of years, and lets you call a 
//  calculate function passing in a principal amount and it will return the 
//  total amount of interest you would pay at the given rate and number of years.
//   Interest rate and number of years should be PRIVATE module data, and nothing
//   should be in the global namespace besides the one object returned which
//   exposes only the 3 functions - calculate, setRate and setYears 
//     (not terribly useful but hey, it's practice).



 window.intrestRateCalculator = (function calculator(){
  'use strict';

  let interestRate=0;
  let years =0;
 
//   function setRate(rate){
//      interestRate=rate;
    
//  }
//  function setYears(yrs){
//      years=yrs;
    

//  }
 function calculate(amount){
  let p=amount;
     for(let i=0; i<years.length; i++){
    p+=p*interestRate;
  return p-amount;}}

    return{
        setRate: function setRate(rate){
          interestRate=rate;
          return this;
        },
        setYears:function setYears(yrs){
          years=yrs;
          return this;
        },
       
        calculate:calculate
    };
}());


// window.intrestRateCalculator.setRate(0.09);
// window.intrestRateCalculator.setYears(10);
// console.log(window.intrestRateCalculator.calculate(100));

console.log(window.intrestRateCalculator.setYears(10).setYears(0.09).calculate(100));

