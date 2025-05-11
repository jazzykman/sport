document.addEventListener("DOMContentLoaded", () => {
  alert("Ласкаво просимо до Плавального клубу 'Energia'!");

  const isMember = confirm("Ви вже є учасником нашого клубу?");
  if (isMember) {
    alert("Дякуємо, що ви з нами! Насолоджуйтесь нашими послугами.");
  } else {
    const userName = prompt("Як вас звати?");
    if (userName && userName.trim() !== "") {
      const age = prompt("Скільки вам років?");
      if (age >= 18) {
        alert(`Вітаємо, ${userName}! Ви можете користуватися всіма послугами клубу.`);
      } else {
        alert(`На жаль, ${userName}, вам потрібно бути старше 18 років.`);
      }
    } else {
      alert("Пропонуємо вам доєднатися, шановний гість!");
    }
  }

  alert("Наш клуб пропонує сучасні басейни, професійних тренерів та комфортні умови для тренувань!");
});