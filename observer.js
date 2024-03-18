// Клас корзини, який буде відслідковувати зміни
class ShoppingCart {
  constructor() {
    this.observers = []; // список спостерігачів
    this.items = []; // список товарів у корзині
  }

  // Додати спостерігача
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Видалити спостерігача
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Додати товар у корзину
  addItem(item) {
    this.items.push(item);
    this.notify(); // сповістити всіх спостерігачів про зміни
  }

  // Сповістити всіх спостерігачів про зміни
  notify() {
    this.observers.forEach(observer => {
      observer.update(this.items);
    });
  }
}

// Клас спостерігача, який відповідає за відображення сповіщення про додавання товару
class CartNotification {
  // Метод, який викликається при отриманні сповіщення
  update(items) {
    console.log(`Додано новий товар у корзину! Всього товарів у корзині: ${items.length}`);
  }
}

// Створення екземплярів корзини та спостерігача
const cart = new ShoppingCart();
const notification = new CartNotification();

// Підписка спостерігача на корзину
cart.addObserver(notification);

// Додавання товару у корзину
cart.addItem('Продукт 1');
cart.addItem('Продукт 2');
