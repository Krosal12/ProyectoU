document.addEventListener("DOMContentLoaded", function() {
    const fromInput = document.getElementById("from");
    const toInput = document.getElementById("to");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
  
    fromInput.addEventListener("input", convertArea);
    fromUnit.addEventListener("change", convertArea);
    toUnit.addEventListener("change", convertArea);
  
    function convertArea() {
      const fromValue = parseFloat(fromInput.value);
      const fromUnitValue = fromUnit.value;
      const toUnitValue = toUnit.value;
  
      let result;
  
      if (fromUnitValue === "m2" && toUnitValue === "ft2") {
        result = fromValue * 10.7639;
      } else if (fromUnitValue === "ft2" && toUnitValue === "m2") {
        result = fromValue / 10.7639;
      } else {
        result = fromValue; // Si las unidades son iguales, no se necesita conversión
      }
  
      toInput.value = result.toFixed(2);
    }
  
    convertArea(); // Llama a la función para mostrar el valor inicial
  });
  