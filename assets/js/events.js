function handleMouseOver() {
  alert("Мышь наведена на элемент!");
}

const propertyButton = document.querySelector("#property-handler");
propertyButton.onclick = function () {
  alert("Клик через свойство!");
};

const multiHandlerButton = document.querySelector("#multi-handler");
multiHandlerButton.addEventListener("click", () => alert("Первый обработчик!"));
multiHandlerButton.addEventListener("click", () => alert("Второй обработчик!"));

const handlerObject = {
  handleEvent(event) {
    alert(`Обработчик через объект: ${event.currentTarget.tagName}`);
  },
};

const objectHandlerButton = document.querySelector("#object-handler");
objectHandlerButton.addEventListener("click", handlerObject);