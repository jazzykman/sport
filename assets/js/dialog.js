function userDialog() {
  const userName = prompt("Як вас звати?");
  const age = prompt("Скільки вам років?");
  if (age >= 18) {
    alert(`Вітаємо, ${userName}! Ви можете користуватися всіма послугами клубу.`);
  } else {
    alert(`На жаль, ${userName}, вам потрібно бути старше 18 років.`);
  }
}