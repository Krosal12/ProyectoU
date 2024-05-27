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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { convertToMetersPerSecond, convertToKilometersPerHour };
}
