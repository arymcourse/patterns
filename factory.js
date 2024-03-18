// Клас для печива
class Cookie {
    constructor(ingredients) {
        this.name = 'Cookie';
        this.ingredients = ingredients;
    }
}

// Клас для пирога
class Pie {
    constructor(ingredients) {
        this.name = 'Pie';
        this.ingredients = ingredients;
    }
}

// Фабричний метод для створення випічки
class Bakery {
    // Метод створення випічки
    createBakeryItem(type, ingredients) {
        switch (type) {
            case 'Cookie':
                return new Cookie(ingredients);
            case 'Pie':
                return new Pie(ingredients);
            default:
                throw new Error("Invalid bakery item type");
        }
    }

    // Метод формування замовлення
    order(items) {
        console.log("Order received:");
        for (let item of items) {
            this.prepare(item);
        }
        console.log("Order is ready!");
    }

    // Метод приготування випічки
    prepare(item) {
        console.log(`Preparing ${item.name} with ingredients: ${item.ingredients.join(', ')}`);
    }
}

// Клас для пекарні, яка спеціалізується на печиві
class CookieBakery extends Bakery {
    createBakeryItem(ingredients) {
        return this.createBakeryItem('Cookie', ingredients);
    }
}

// Клас для пекарні, яка спеціалізується на пирогах
class PieBakery extends Bakery {
    createBakeryItem(ingredients) {
        return this.createBakeryItem('Pie', ingredients);
    }
}

// Приклад використання

// Пекарня печива
const cookieBakery = new CookieBakery();

// Пекарня пирогів
const pieBakery = new PieBakery();

// Формуємо замовлення зі своїми інгредієнтами
const orderItems = [
    cookieBakery.createBakeryItem(['flour', 'sugar', 'butter', 'chocolate chips']),
    pieBakery.createBakeryItem(['flour', 'sugar', 'butter', 'fruit filling'])
];
cookieBakery.order(orderItems);
