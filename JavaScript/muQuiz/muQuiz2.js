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

  countries = Object.entries(countries);

  console.log(countries);

  countries.forEach(element => {
    const theCurrency = element[1].currencyId;
    const theCountry = element[1].name;
    const currencySymbol = element[1].currencySymbol
    const currencyName = element[1].currencyName


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