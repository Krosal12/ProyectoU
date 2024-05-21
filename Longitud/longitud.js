function convertLength() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (isNaN(inputValue)) {
        result = "Entrada no válida";
    } else {
        let meters;
        switch (fromUnit) {
            case 'meters':
                meters = inputValue;
                break;
            case 'kilometers':
                meters = inputValue * 1000;
                break;
            case 'miles':
                meters = inputValue * 1609.34;
                break;
            case 'yards':
                meters = inputValue * 0.9144;
                break;
        }

        switch (toUnit) {
            case 'meters':
                result = meters;
                break;
            case 'kilometers':
                result = meters / 1000;
                break;
            case 'miles':
                result = meters / 1609.34;
                break;
            case 'yards':
                result = meters / 0.9144;
                break;
        }

        result = result.toFixed(2);
    }

    document.getElementById('display').value = result;
}
