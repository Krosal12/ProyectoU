let inputValue = document.getElementById('inputValue');
let display = document.getElementById('display');

function convertToBinary() {
    let decimal = parseInt(inputValue.value, 10);
    if (!isNaN(decimal)) {
        display.value = decimal.toString(2) + ' (Binario)';
    } else {
        display.value = 'Ingrese un Valor Válido';
    }
}

function convertToHexadecimal() {
    let decimal = parseInt(inputValue.value, 10);
    if (!isNaN(decimal)) {
        display.value = decimal.toString(16).toUpperCase() + ' (Hex)';
    } else {
        display.value = 'Ingrese un Valor Válido';
    }
}

function convertToDecimalFromBinary() {
    let binary = inputValue.value;
    if (/^[01]+$/.test(binary)) {
        let decimal = parseInt(binary, 2);
        display.value = decimal + ' (Decimal)';
    } else {
        display.value = 'Ingrese un Valor Válido';
    }
}

function convertToDecimalFromHex() {
    let hex = inputValue.value;
    if (/^[0-9a-fA-F]+$/.test(hex)) {
        let decimal = parseInt(hex, 16);
        display.value = decimal + ' (Decimal)';
    } else {
        display.value = 'Ingrese un Hexadecimal';
    }
}
