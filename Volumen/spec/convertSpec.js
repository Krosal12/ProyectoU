const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("convertVolume", function() {
    let dom;
    let document;

    beforeEach(function() {
        dom = new JSDOM(`<!DOCTYPE html>
        <html>
        <head></head>
        <body>
            <input type="text" id="volumeInput">
            <select id="fromUnit">
                <option value="liters">Liters</option>
                <option value="cubic_meters">Cubic Meters</option>
                <option value="gallons">Gallons</option>
            </select>
            <select id="toUnit">
                <option value="liters">Liters</option>
                <option value="cubic_meters">Cubic Meters</option>
                <option value="gallons">Gallons</option>
            </select>
            <div id="display"></div>
        </body>
        </html>`);
        document = dom.window.document;

        // Asegurarse de que convertVolume y getUnitLabel estén disponibles en el alcance global
        global.convertVolume = function() {
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
        };

        global.getUnitLabel = function(unit) {
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
        };
    });

    it("should convert liters to cubic meters correctly", function() {
        document.getElementById("volumeInput").value = "1000";
        document.getElementById("fromUnit").value = "liters";
        document.getElementById("toUnit").value = "cubic_meters";
        convertVolume();
        expect(document.getElementById("display").innerHTML).toBe("Volumen convertido: 1.00 Metros Cúbicos");
    });

    it("should convert cubic meters to gallons correctly", function() {
        document.getElementById("volumeInput").value = "1";
        document.getElementById("fromUnit").value = "cubic_meters";
        document.getElementById("toUnit").value = "gallons";
        convertVolume();
        expect(document.getElementById("display").innerHTML).toBe("Volumen convertido: 264.17 Galones");
    });

    it("should show error for negative input", function() {
        document.getElementById("volumeInput").value = "-5";
        convertVolume();
        expect(document.getElementById("display").innerHTML).toBe("Por favor, ingresa un valor válido.");
    });

    it("should show error for non-numeric input", function() {
        document.getElementById("volumeInput").value = "abc";
        convertVolume();
        expect(document.getElementById("display").innerHTML).toBe("Por favor, ingresa un valor válido.");
    });
});
