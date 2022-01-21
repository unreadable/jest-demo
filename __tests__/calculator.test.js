const Calculator = require('../src/calculator');

describe('calculator.js', () => {
    let calculator = new Calculator();

    it('should add properly', () => {
        let sum = calculator.sum(1, 1);

        expect(sum).toBe(2);
        expect(sum).not.toBe(40);
        expect(() => sum).not.toThrow();
    });

    it('should subtract properly', () => {
        let diff = calculator.substract(4, 5);

        expect(diff).toBe(-1);
        expect(diff).not.toBe(40);
        expect(() => diff).not.toThrow();
    });

    it('should multiply properly', () => {
        let mul = calculator.multiply(4, 5);

        expect(mul).toBe(20);
        expect(mul).not.toBe(-5);
        expect(() => mul).not.toThrow();
    });

    it('should divide properly', () => {
        let div = calculator.divide(4, 20);

        expect(div).toBe(0.2);
        expect(div).not.toBe(5);
        expect(() => div).not.toThrow();
    });

    it('should really divide properly', () => {
        expect(() => calculator.divide(0, 0)).toThrow();
    });
});
