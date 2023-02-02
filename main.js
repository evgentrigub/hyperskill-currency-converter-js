import * as helpers from './helpers'
const input = require('sync-input');

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`)

const mainConvert = () => {
    console.log("What do you want to convert?")
    const currencyFrom = input("From: ");
    const currencyFromUpperCase = currencyFrom.toUpperCase();
    if (currencyFromUpperCase !== 'JPY' && currencyFromUpperCase !== 'EUR' && currencyFromUpperCase !== "RUB" && currencyFromUpperCase !== "GBP" && currencyFromUpperCase !== "USD"){
        console.log("Unknown currency");
        return;
    }

    const currencyTo = input("To: ");
    const currencyToUpperCase = currencyTo.toUpperCase();
    if (currencyToUpperCase !== 'JPY' && currencyToUpperCase !== 'EUR' && currencyToUpperCase !== "RUB" && currencyToUpperCase !== "GBP" && currencyToUpperCase !== "USD"){
        console.log("Unknown currency");
        return;
    }

    const amount = Number(input("Amount: "));
    const res = helpers.convertCurrency(currencyFromUpperCase, currencyToUpperCase, amount)
    if (isNaN(res)) {
        console.log(res)
    } else {
        console.log(`Result: ${amount} ${currencyFromUpperCase} equals ${res.toFixed(4)} ${currencyToUpperCase}`)
    }
}

const run = () => {
    helpers.printOptions();
    const option = input();
    switch (option){
        case '1':
            mainConvert();
            run()
            break;
        case '2':
            console.log("Have a nice day!")
            break;
        default:
            console.log("Unknown input")
            run()
            break;

    }
}

run();
