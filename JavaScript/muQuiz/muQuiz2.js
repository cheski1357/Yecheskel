(async function () {
  'use strict';
  const letsSort = function (arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
  return arr;
}

const letsSort2 = function (arr) {
    for (let i = 0; i < arr.length; i++) {
       letsSort(arr)
}

    return arr;
}

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
  countries = Object.entries(countries);
  countries = countries.map(e=>e[1]);

  
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

  
  
 




  theButton.on('click', async () => {

    const request2 = await fetch(`https://free.currconv.com/api/v7/convert?q=${currencyASelect.val()}_${currencyBSelect.val()}&compact=ultra&apiKey=72a99de8930ff1b330d0`);
    const theExchangeRate = await request2.json()



    console.log(Object.values(theExchangeRate));

    theRate.text(Object.values(theExchangeRate));

    currencyABox.text(currencyASelect.val())
    currencyBBox.text(currencyBSelect.val())

  });

  theSecondButton.on('click', async () => {

    const request3 = await fetch(`https://free.currconv.com/api/v7/convert?q=${currencyCSelect.val()}_${currencyDSelect.val()}&compact=ultra&apiKey=72a99de8930ff1b330d0`);
    const theRate = await request3.json();

    userOutput.text(Math.round((Object.values(theRate) * userInput.val())));
  })

}())