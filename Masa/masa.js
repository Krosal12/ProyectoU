function convertMass() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (isNaN(inputValue)) {
        result = "Entrada no válida";
    } else {
        switch (fromUnit) {
            case 'g':
                switch (toUnit) {
                    case 'g':
                        result = inputValue;
                        break;
                    case 'kg':
                        result = inputValue / 1000;
                        break;
                    case 'lb':
                        result = inputValue * 0.00220462;
                        break;
                    case 'oz':
                        result = inputValue * 0.035274;
                        break;
                }
                break;
            case 'kg':
                switch (toUnit) {
                    case 'g':
                        result = inputValue * 1000;
                        break;
                    case 'kg':
                        result = inputValue;
                        break;
                    case 'lb':
                        result = inputValue * 2.20462;
                        break;
                    case 'oz':
                        result = inputValue * 35.274;
                        break;
                }
                break;
            case 'lb':
                switch (toUnit) {
                    case 'g':
                        result = inputValue * 453.592;
                        break;
                    case 'kg':
                        result = inputValue * 0.453592;
                        break;
                    case 'lb':
                        result = inputValue;
                        break;
                    case 'oz':
                        result = inputValue * 16;
                        break;
                }
                break;
            case 'oz':
                switch (toUnit) {
                    case 'g':
                        result = inputValue * 28.3495;
                        break;
                    case 'kg':
                        result = inputValue * 0.0283495;
                        break;
                    case 'lb':
                        result = inputValue * 0.0625;
                        break;
                    case 'oz':
                        result = inputValue;
                        break;
                }
                break;
            default:
                result = "Unidad desconocida";
        }
        result = result.toFixed(2);
    }

    document.getElementById('display').value = result;
}
