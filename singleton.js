class DatabaseConfig {
    constructor(host, username, password, database) {
        if (DatabaseConfig.instance) {
            throw new Error("This class is a singleton!");
        }
        this.host = host;
        this.username = username;
        this.password = password;
        this.database = database;
        DatabaseConfig.instance = this;
    }

    static getInstance() {
        if (!DatabaseConfig.instance) {
            throw new Error("Instance has not been created yet!");
        }
        return DatabaseConfig.instance;
    }
}

// Приклад використання:

// Ініціалізуємо конфігурацію бази даних
const dbConfig = new DatabaseConfig("localhost", "root", "password", "my_database");

// Отримуємо доступ до конфігурації бази даних з будь-якого місця програми
const sameDbConfig = DatabaseConfig.getInstance();

// Перевірка, що обидва об'єкти насправді є одним і тим же екземпляром
console.log(dbConfig === sameDbConfig); // Виведе true
