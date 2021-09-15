window.myApp=window.myApp||{};

window.myApp.utils=(function(theModule) {

    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
     "Thursday", "Friday", "Saturday"];
  
    theModule.getDay=function (index) {
        return dayOfWeek[index-1];
      };
      
      
    theModule.getIndex= function (day){
     //return dayOfWeek.findIndex(day => dow === day.toLowerCase()) + 1;
     for(let i = 0; i < dayOfWeek.length; i++) {
       if(dayOfWeek[i] === day){
     return i+1;
    }}
  
    // return days.findIndex(function (dayOfWeek) {
    //   return dayOfWeek.toLowerCase();
    // }) + 1;
       };
   return  theModule; 
      
}(window.myApp.utils||{}));
window.myApp.utils
  
 




