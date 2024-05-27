function convertCurrency() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    let result;

    if (isNaN(inputValue)) {
        result = "Entrada no válida";
    } else {
        if (fromCurrency === 'GTQ') {
            result = convertFromGTQ(inputValue, toCurrency);
        } else if (fromCurrency === 'USD') {
            result = convertFromUSD(inputValue, toCurrency);
        } else if (fromCurrency === 'EUR') {
            result = convertFromEUR(inputValue, toCurrency);
        } else if (fromCurrency === 'GBP') {
            result = convertFromGBP(inputValue, toCurrency);
        }
    }

    document.getElementById('display').value = result.toFixed(2);
}

function convertFromGTQ(value, toCurrency) {
    switch (toCurrency) {
        case 'GTQ':
            return value;
        case 'USD':
            return value * 0.13;
        case 'EUR':
            return value * 0.12;
        case 'GBP':
            return value * 0.10;
        default:
            return "Unidad desconocida";
    }
}

function convertFromUSD(value, toCurrency) {
    switch (toCurrency) {
        case 'GTQ':
            return value * 7.70;
        case 'USD':
            return value;
        case 'EUR':
            return value * 0.90;
        case 'GBP':
            return value * 0.77;
        default:
            return "Unidad desconocida";
    }
}

function convertFromEUR(value, toCurrency) {
    switch (toCurrency) {
        case 'GTQ':
            return value * 8.54;
        case 'USD':
            return value * 1.11;
        case 'EUR':
            return value;
        case 'GBP':
            return value * 0.86;
        default:
            return "Unidad desconocida";
    }
}

function convertFromGBP(value, toCurrency) {
    switch (toCurrency) {
        case 'GTQ':
            return value * 9.91;
        case 'USD':
            return value * 1.30;
        case 'EUR':
            return value * 1.16;
        case 'GBP':
            return value;
        default:
            return "Unidad desconocida";
    }
}
