// Функція для перехоплення статусів HTTP запитів
function interceptHTTPStatus(fetchFunction) {
  return async function(...args) {
    try {
      const response = await fetchFunction(...args);
      console.log(`HTTP Status: ${response.status}`);
      return response;
    } catch (error) {
      console.error(`HTTP Request failed: ${error}`);
      throw error;
    }
  }
}

// Функція для виконання HTTP запиту з перехопленням статусу
const fetchWithInterception = interceptHTTPStatus(fetch);

// Використання функції для виконання HTTP запиту
(async () => {
  try {
    const response = await fetchWithInterception('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
