let inputValue = document.getElementById('inputValue');
let display = document.getElementById('display');

function convertToFahrenheit() {
    let celsius = parseFloat(inputValue.value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9 / 5) + 32;
        display.value = fahrenheit.toFixed(2) + ' °F';
    } else {
        display.value = 'Enter a valid number';
    }
}

function convertToCelsius() {
    let fahrenheit = parseFloat(inputValue.value);
    if (!isNaN(fahrenheit)) {
        let celsius = (fahrenheit - 32) * 5 / 9;
        display.value = celsius.toFixed(2) + ' °C';
    } else {
        display.value = 'Enter a valid number';
    }
}
