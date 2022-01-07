(async function () {
    'use strict';

    const currencyASelect = $('#currencyA');
    const currencyBSelect = $('#currencyB');
    const theButton = $('#theButton');
    const theRate = $('#boxResult');
    const currencyABox = $('#cAR');
    const currencyBBox = $('#cBR');

    const request = await fetch('countries.json');
    let countries = await request.json();

    countries = countries.results;

    countries = Object.entries(countries);
    console.log(countries);

    class Country {
        constructor(countryName, currencyName, currencyId) {
            this.countryName = countryName
            this.currencyName = currencyName;
            this.currencyId = currencyId;
        }
    }

    countries.forEach(element => {

        let country = new Country(element[1].name, element[1].currencyName, element[1].currencyId);
        console.log(country)

        console.log(country.countryName, country.currencyName, country.currencyId)

        currencyASelect.append(`<option value = ${country.currencyId} >${country.countryName}, ${country.currencyName}, ${country.currencyId}</option>`);
        currencyBSelect.append(`<option value = ${country.currencyId} >${country.countryName}, ${country.currencyName}, ${country.currencyId}</option>`);
    });

    theButton.on('click', async () => {
        const request2 = await fetch(`https://free.currconv.com/api/v7/convert?q=${currencyASelect.val()}_${currencyBSelect.val()}&compact=ultra&apiKey=72a99de8930ff1b330d0`)
        const theExchangeRate = await request2.json()

        class Currency {
            constructor(currency1, currency2) {
                this.currency1 = currency1;
                this.currency2 = currency2
            }
        }

        class Exchange {
            constructor(rate) {
                this.rate = rate;
            }
        }

        let exchange = new Exchange(theExchangeRate);
        console.log(exchange);

        theRate.text(Object.values(exchange.rate));

        let currencyS = new Currency(currencyASelect.val(), currencyBSelect.val())
        console.log(currencyS)

        currencyABox.text(currencyS.currency1);
        currencyBBox.text(currencyS.currency2)


    })

}())