// Контекст - замовлення
class Order {
    constructor() {
        this.state = new OrderProcessingState(this); // Початковий стан - "В обробці"
    }

    setState(state) {
        this.state = state;
    }

    processOrder() {
        this.state.processOrder();
    }

    cancelOrder() {
        this.state.cancelOrder();
    }

    // Додаткові методи, які можуть бути використані для роботи зі замовленням
}

// Абстрактний клас стану
class OrderState {
    constructor(order) {
        this.order = order;
    }

    processOrder() {
        throw new Error("Метод 'processOrder' має бути реалізований в підкласах");
    }

    cancelOrder() {
        throw new Error("Метод 'cancelOrder' має бути реалізований в підкласах");
    }
}

// Конкретний стан - "В обробці"
class OrderProcessingState extends OrderState {
    processOrder() {
        console.log("Замовлення обробляється...");
        this.order.setState(new OrderAwaitingPaymentState(this.order)); // Перехід до стану "Очікує на оплату"
    }

    cancelOrder() {
        console.log("Замовлення скасовано.");
        // Додаткові дії при скасуванні замовлення в стані "В обробці", якщо потрібно
    }
}

// Конкретний стан - "Очікує на оплату"
class OrderAwaitingPaymentState extends OrderState {
    processOrder() {
        console.log("Очікується оплата...");
        this.order.setState(new OrderShippedState(this.order)); // Перехід до стану "Відправлено"
    }

    cancelOrder() {
        console.log("Замовлення скасовано.");
        // Додаткові дії при скасуванні замовлення в стані "Очікує на оплату", якщо потрібно
    }
}

// Конкретний стан - "Відправлено"
class OrderShippedState extends OrderState {
    processOrder() {
        console.log("Замовлення відправлено.");
        // Додаткові дії при відправленні замовлення, якщо потрібно
    }

    cancelOrder() {
        console.log("Неможливо скасувати вже відправлене замовлення.");
        // Додаткові дії, які можна виконати при спробі скасувати вже відправлене замовлення
    }
}

// Приклад використання
const order = new Order();
order.processOrder(); // Виведе: "Замовлення обробляється..."
order.cancelOrder(); // Виведе: "Замовлення скасовано."
