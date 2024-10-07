const a = require('./functions');

test('capitalize', () => {
    expect(a.capitalize('hello')).toBe('Hello');
})

test('reverseString', () => {
    expect(a.reverseString('hello')).toBe('olleh');
})

test('add', () => {
    expect(a.calculator.add(1, 2)).toBe(3);
})

test('substract', () => {
    expect(a.calculator.substract(1, 2)).toBe(-1);
})

test('divide', () => {
    expect(a.calculator.divide(1, 2)).toBe(0.5);
})

test('multiply', () => {
    expect(a.calculator.multiply(1, 2)).toBe(2);
})