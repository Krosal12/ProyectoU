const convertMass = require('./masa');

test('Convirtiendo de gramos a Kilogramos', () => {
    expect(convertMass(1000, 'g', 'kg')).toBe('1.00');
});

test('Convirtiendo de Kilogramos a gramos', () => {
    expect(convertMass(1, 'kg', 'g')).toBe('1000.00');
});

test('Convirtiendo de onzas a libras', () => {
    expect(convertMass(1, 'lb', 'oz')).toBe('16.00');
});

test('Convirtiendo de libras a onzas', () => {
    expect(convertMass(16, 'oz', 'lb')).toBe('1.00');
});

test('Entradas del usuario invalidas', () => {
    expect(convertMass('abc', 'g', 'kg')).toBe('Entrada no válida');
});

