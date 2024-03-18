// Декоратор - функція
function consoleLogDecorator(func) {
    return function(...args) {
        console.log("Calling function:", func.name);
        const result = func.apply(this, args);
        console.log("Function", func.name, "returned:", result);
        return result;
    }
}

class Calculator {
    constructor() {
        // Застосовуємо декоратор до методу add
        this.add = consoleLogDecorator(this.add.bind(this));
        // Застосовуємо декоратор до методу subtract
        this.subtract = consoleLogDecorator(this.subtract.bind(this));
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }
}

const calculator = new Calculator();

const result1 = calculator.add(2, 3);
const result2 = calculator.subtract(5, 3);
