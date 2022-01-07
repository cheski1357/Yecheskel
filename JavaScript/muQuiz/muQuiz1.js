//although this question doesn't call for a UI, I wasn't sure how to dynamically load it
//without responding to user input (unless I hardcoded two currencies, i.e. not dynamically) 
(async function () {
    'use strict';

    const request = await fetch('countries.json')
    let countries = await request.json();
    console.log(countries)

    countries = countries.results

    countries = Object.entries(countries)

    const currencyASelect = $('#currencyA');
    const currencyBSelect = $('#currencyB');
    const theButton = $('#theButton');

   
    let theCurrencyArray = [];
    let uniqueCurrencies = [];

    countries.forEach(element => {
     const theCurrency = element[1].currencyId

        theCurrencyArray.push(theCurrency);
        theCurrencyArray.sort();

        uniqueCurrencies = theCurrencyArray.filter((c, index) => {
            return theCurrencyArray.indexOf(c) === index;
        });


    });
    uniqueCurrencies.forEach(currency => {

        currencyASelect.append(`<option> ${currency}</option>`)
        currencyBSelect.append(`<option>${currency}</option>`)
        console.log(currency)
    });
    console.log(theCurrencyArray)
    console.log(uniqueCurrencies)

    theButton.on('click', async () => {
        const request2 = await fetch(`https://free.currconv.com/api/v7/convert?q=${currencyASelect.val()}_${currencyBSelect.val()}&compact=ultra&apiKey=72a99de8930ff1b330d0`)
        const theExchangeRate = await request2.json();

        console.log(theExchangeRate)

    });


}())