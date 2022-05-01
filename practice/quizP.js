(async function () {
    'use strict';
    
  
    const currencyASelect = $('#currencyA');
    const currencyBSelect = $('#currencyB');
    const theButton = $('#theButton');
    const theRate = $('#boxResult');
    const currencyABox = $('#cAR');
    const currencyBBox = $('#cBR');
    const userOutput = $('#currencyOutput');
    const theSecondButton = $('#theButton2')
    const currencyCSelect = $('#currencyC');
    const currencyDSelect = $('#currencyD')
    const userInput = $('#currencyInput')
  
    const request = await fetch('countries.json')
    let countries = await request.json();
  
    
    countries = countries.results;
    console.log(countries);
countries = Object.entries(countries);
console.log(countries);
//countries = countries.map(e=>e[1]);

countries = countries.map(function(e){
    return e[1];
})
console.log(countries);


countries.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

    countries.forEach(element => {

    const theCurrency = element.currencyId;
    const theCountry = element.name;
    const currencySymbol = element.currencySymbol
    const currencyName = element.currencyName


    currencyASelect.append(`<option value = ${theCurrency} >${theCountry}, ${currencyName}, ${currencySymbol}, ${theCurrency}</option>`)
    currencyBSelect.append(`<option value = ${theCurrency} >${theCountry}, ${currencyName}, ${currencySymbol}, ${theCurrency}</option>`)
    currencyCSelect.append(`<option value = ${theCurrency} >${theCountry}, ${theCurrency}</option>`)
    currencyDSelect.append(`<option value = ${theCurrency} >${theCountry}, ${theCurrency}</option>`)
 
    })
  
   
}())