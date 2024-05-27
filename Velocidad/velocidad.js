function convertToMetersPerSecond(kmPerHour) {
    if (!isNaN(kmPerHour)) {
        return (kmPerHour / 3.6).toFixed(2) + ' m/s';
    } else {
        return 'Ingrese un número';
    }
}

function convertToKilometersPerHour(metersPerSecond) {
    if (!isNaN(metersPerSecond)) {
        return (metersPerSecond * 3.6).toFixed(2) + ' km/h';
    } else {
        return 'Ingrese un número';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('inputValue');
    const display = document.getElementById('display');

    document.getElementById('toMetersPerSecond').addEventListener('click', () => {
        const kmPerHour = parseFloat(inputValue.value);
        display.value = convertToMetersPerSecond(kmPerHour);
    });

    document.getElementById('toKilometersPerHour').addEventListener('click', () => {
        const metersPerSecond = parseFloat(inputValue.value);
        display.value = convertToKilometersPerHour(metersPerSecond);
    });
});
