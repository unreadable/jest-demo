class Calculator {
    constructor() {};

    sum(a, b) {
        return a + b;
    }

    substract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (!a && !b) throw new Error('Undefined');

        return a / b;
    }
}

module.exports = Calculator;
