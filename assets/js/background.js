function changeBackground() {
  document.body.style.backgroundColor = "#f0f8ff";
  setTimeout(() => {
    document.body.style.backgroundColor = "";
  }, 30000);
}

function redirectToPage() {
  location.href = "directions.html";
}