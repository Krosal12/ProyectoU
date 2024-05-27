function convertVolume() {
    var volume = parseFloat(document.getElementById("volumeInput").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    if (isNaN(volume) || volume < 0) {
        document.getElementById("display").innerHTML = "Por favor, ingresa un valor válido.";
        return;
    }

    var convertedVolume = 0;

    // Conversión a litros
    if (fromUnit === "liters") {
        convertedVolume = volume;
    } else if (fromUnit === "cubic_meters") {
        convertedVolume = volume * 1000;
    } else if (fromUnit === "gallons") {
        convertedVolume = volume * 3.78541;
    }

    // Conversión de litros a la unidad deseada
    if (toUnit === "liters") {
        // No es necesario hacer nada, ya está en litros
    } else if (toUnit === "cubic_meters") {
        convertedVolume = convertedVolume / 1000;
    } else if (toUnit === "gallons") {
        convertedVolume = convertedVolume / 3.78541;
    }

    document.getElementById("display").innerHTML = "Volumen convertido: " + convertedVolume.toFixed(2) + " " + getUnitLabel(toUnit);
}

function getUnitLabel(unit) {
    switch (unit) {
        case "liters":
            return "Litros";
        case "cubic_meters":
            return "Metros Cúbicos";
        case "gallons":
            return "Galones";
        default:
            return "";
    }
}