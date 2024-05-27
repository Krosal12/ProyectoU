document.addEventListener("DOMContentLoaded", function() {
    const inputValue = document.getElementById("inputValue");
    const inputUnit = document.getElementById("inputUnit");
    const outputUnit = document.getElementById("outputUnit");
    const output = document.getElementById("output");
  
    inputValue.addEventListener("input", convertTime);
    inputUnit.addEventListener("change", convertTime);
    outputUnit.addEventListener("change", convertTime);
  
    function convertTime() {
      const value = parseFloat(inputValue.value);
      const inputTimeUnit = inputUnit.value;
      const outputTimeUnit = outputUnit.value;
  
      let result;
  
      if (inputTimeUnit === "seconds") {
        if (outputTimeUnit === "minutes") {
          result = value / 60;
        } else if (outputTimeUnit === "hours") {
          result = value / 3600;
        } else {
          result = value;
        }
      } else if (inputTimeUnit === "minutes") {
        if (outputTimeUnit === "seconds") {
          result = value * 60;
        } else if (outputTimeUnit === "hours") {
          result = value / 60;
        } else {
          result = value;
        }
      } else if (inputTimeUnit === "hours") {
        if (outputTimeUnit === "seconds") {
          result = value * 3600;
        } else if (outputTimeUnit === "minutes") {
          result = value * 60;
        } else {
          result = value;
        }
      }
  
      output.textContent = result.toFixed(2);
    }
  
    convertTime(); // Llama a la función para mostrar el valor inicial
  });
  