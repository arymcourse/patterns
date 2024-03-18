// Проксі для перехоплення статусів HTTP запитів
const HTTPStatusProxy = new Proxy(fetch, {
  apply: async (target, thisArg, args) => {
    try {
      const response = await target(...args);
      console.log(`HTTP Status: ${response.status}`);
      return response;
    } catch (error) {
      console.error(`HTTP Request failed: ${error}`);
      throw error;
    }
  }
});

// Використання проксі для виконання HTTP запиту
(async () => {
  try {
    const response = await HTTPStatusProxy('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
