function changeBackground() {
  // Змінюємо фон сторінки
  document.body.style.transition = "background-color 0.5s ease"; // Додаємо плавний перехід
  document.body.style.backgroundColor = "#f0f8ff"; // Блакитний фон

  // Повертаємо стандартний фон через 30 секунд
  setTimeout(() => {
    document.body.style.backgroundColor = ""; // Повертаємо стандартний фон
  }, 30000);
}

function redirectToPage() {
  location.href = "directions.html";
}