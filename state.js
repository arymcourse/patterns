// Абстрактний клас стану
class OrderState {
    constructor(order) {
        this.order = order;
    }

    next() {
        throw new Error('Метод next повинен бути перевизначений у підкласі');
    }
}

// Конкретний стан - замовлення замовлене
class OrderedState extends OrderState {
    next() {
        console.log('Замовлення отримано, в процесі упаковки');
        this.order.setState(new PackagingState(this.order));
    }
}

// Конкретний стан - замовлення упаковане
class PackagingState extends OrderState {
    next() {
        console.log('Замовлення упаковане, в процесі відправлення');
        this.order.setState(new ShippedState(this.order));
    }
}

// Конкретний стан - замовлення відправлене
class ShippedState extends OrderState {
    next() {
        console.log('Замовлення відправлене, в процесі доставки');
        this.order.setState(new DeliveredState(this.order));
    }
}

// Конкретний стан - замовлення доставлене
class DeliveredState extends OrderState {
    next() {
        console.log('Замовлення доставлене, завершено');
    }
}

// Об'єкт - замовлення в інтернет-магазині
class Order {
    constructor() {
        this.state = new OrderedState(this);
    }

    setState(state) {
        this.state = state;
    }

    next() {
        this.state.next();
    }
}

// Використання

const order = new Order();

order.next(); // Замовлення отримано, в процесі упаковки
order.next(); // Замовлення упаковане, в процесі відправлення
order.next(); // Замовлення відправлене, в процесі доставки
order.next(); // Замовлення доставлене, завершено
