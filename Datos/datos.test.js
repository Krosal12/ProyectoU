const convertDataUnits = require('./datos');

test('converts bytes to kilobytes', () => {
    expect(convertDataUnits(1024, 'bytes', 'kilobytes')).toBe('1.00');
});

test('converts kilobytes to bytes', () => {
    expect(convertDataUnits(1, 'kilobytes', 'bytes')).toBe('1024.00');
});

test('converts megabytes to bytes', () => {
    expect(convertDataUnits(1, 'megabytes', 'bytes')).toBe('1048576.00');
});

test('converts bytes to megabytes', () => {
    expect(convertDataUnits(1048576, 'bytes', 'megabytes')).toBe('1.00');
});



test('handles invalid input unit', () => {
    expect(convertDataUnits(1024, 'invalidUnit', 'kilobytes')).toBe('Unidad de entrada inválida');
});

test('handles invalid output unit', () => {
    expect(convertDataUnits(1024, 'bytes', 'invalidUnit')).toBe('Unidad de salida inválida');
});
