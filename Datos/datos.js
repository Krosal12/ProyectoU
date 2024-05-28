// Masa/masa.js
function convertDataUnits(value, inputDataUnit, outputDataUnit) {
    let bytes;

    // Convertir a bytes
    if (inputDataUnit === "bytes") {
        bytes = value;
    } else if (inputDataUnit === "kilobytes") {
        bytes = value * 1024;
    } else if (inputDataUnit === "megabytes") {
        bytes = value * 1024 * 1024;
    } else {
        return "Unidad de entrada inválida";
    }

    // Convertir de bytes a la unidad deseada
    let result;
    if (outputDataUnit === "bytes") {
        result = bytes;
    } else if (outputDataUnit === "kilobytes") {
        result = bytes / 1024;
    } else if (outputDataUnit === "megabytes") {
        result = bytes / (1024 * 1024);
    } else {
        return "Unidad de salida inválida";
    }

    return result.toFixed(2);
}

if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", function() {
        const inputValue = document.getElementById("inputValue");
        const inputUnit = document.getElementById("inputUnit");
        const outputUnit = document.getElementById("outputUnit");
        const output = document.getElementById("output");

        function convertData() {
            const value = parseFloat(inputValue.value);
            const inputDataUnit = inputUnit.value;
            const outputDataUnit = outputUnit.value;

            const result = convertDataUnits(value, inputDataUnit, outputDataUnit);
            output.textContent = result;
        }

        inputValue.addEventListener("input", convertData);
        inputUnit.addEventListener("change", convertData);
        outputUnit.addEventListener("change", convertData);

        convertData(); // Llama a la función para mostrar el valor inicial
    });
}

module.exports = convertDataUnits;
