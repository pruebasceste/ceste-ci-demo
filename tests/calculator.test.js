const { sum, subtract, multiply, divide, average } = require('../src/calculator');

describe('calculator', () => {
    test('sum adds two numbers', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum('2', '3')).toBe(5);
    });

    test('subtract works correctly', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiply works correctly', () => {
        expect(multiply(2, 4)).toBe(8);
    });

    test('divide works correctly with non-zero divisor', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('average returns 0 for empty list', () => {
        expect(average([])).toBe(0);
    });

    test('average calculates correct mean', () => {
        expect(average([2, 4, 6])).toBe(4);
    });
});
