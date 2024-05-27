const { convertToMetersPerSecond, convertToKilometersPerHour } = require('../logic.js');

describe('Funciones de conversión', () => {
    it('debería convertir kilómetros por hora a metros por segundo', () => {
        expect(convertToMetersPerSecond(36)).toBe('10.00 m/s');
        expect(convertToMetersPerSecond(0)).toBe('0.00 m/s');
        expect(convertToMetersPerSecond('abc')).toBe('Ingrese un número');
    });

    it('debería convertir metros por segundo a kilómetros por hora', () => {
        expect(convertToKilometersPerHour(10)).toBe('36.00 km/h');
        expect(convertToKilometersPerHour(0)).toBe('0.00 km/h');
        expect(convertToKilometersPerHour('abc')).toBe('Ingrese un número');
    });
});
