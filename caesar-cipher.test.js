const caesarCipher = require('./caesar-cipher');

test('caesarCipher', () => { 
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('caesarCipher', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
})

test('caesarCipher', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('caesarCipher', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})