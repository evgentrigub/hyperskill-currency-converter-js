const JPY = 113.5;
const EUR = 0.89;
const RUB = 74.36;
const GBP = 0.75;

const convertCurrencyInUsd = (currencyFrom, amountCurrencyFrom) => {
    switch (currencyFrom) {
        case 'JPY':
            return amountCurrencyFrom / JPY;
        case 'EUR':
            return amountCurrencyFrom / EUR;
        case 'RUB':
            return amountCurrencyFrom / RUB;
        case 'GBP':
            return amountCurrencyFrom / GBP;
    }
}

export const convertCurrency = (currencyFrom, currencyTo, amountCurrencyFrom) => {
    if(isNaN(amountCurrencyFrom)){
        return "The amount has to be a number";
    }

    if(amountCurrencyFrom < 0){
        return "The amount cannot be less than 1";
    }

    let amountCurrencyInUsd = amountCurrencyFrom;
    if(currencyFrom !== 'USD'){
        amountCurrencyInUsd = convertCurrencyInUsd(currencyFrom, amountCurrencyFrom)
    }
    // console.log(amountCurrencyInUsd)

    switch (currencyTo) {
        case 'JPY':
            return JPY*amountCurrencyInUsd;
        case 'EUR':
            return EUR*amountCurrencyInUsd;
        case 'RUB':
            return RUB*amountCurrencyInUsd;
        case 'GBP':
            return GBP*amountCurrencyInUsd;
        case 'USD':
            return amountCurrencyInUsd;
        default:
            return "Unknown currency"
    }
}

export const printOptions = () => {
    console.log(`What do you want to do?
    1-Convert currencies 2-Exit program`)
}