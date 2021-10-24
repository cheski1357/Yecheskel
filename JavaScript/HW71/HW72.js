(function(){
'use strict';
console.log('before fetch 1');
fetch('recipe.json')
  .then(response => {
    console.log('got response 1');
    if (!response.ok) {
     
      throw new Error(`${response.status} ${response.statusText}`);
    } 
    return response.json();
    //}
  })
  /*.then(text => {
    console.log(typeof text, text);
    const people = JSON.parse(text);
    console.log(typeof people, people);
  })*/
  .then(people => {
    console.log(typeof people, people);
  })
  .catch(err => console.error('OOPS, ERROR', err));

console.log('after fetch 1');



}())