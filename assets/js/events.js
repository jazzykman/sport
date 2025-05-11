// document.addEventListener("DOMContentLoaded", function () {
//   function handleMouseOver() {
//     alert("Мышь наведена на элемент!");
//   }

//   const propertyButton = document.querySelector("#property-handler");
//   propertyButton.onclick = function () {
//     alert("Клик через свойство!");
//   };

//   const multiHandlerButton = document.querySelector("#multi-handler");
//   multiHandlerButton.addEventListener("click", () => alert("Первый обработчик!"));
//   multiHandlerButton.addEventListener("click", () => alert("Второй обработчик!"));

//   const handlerObject = {
//     handleEvent(event) {
//       alert(`Обработчик через объект: ${event.currentTarget.tagName}`);
//     },
//   };

//   const objectHandlerButton = document.querySelector("#object-handler");
//   objectHandlerButton.addEventListener("click", handlerObject);

//   document.querySelectorAll(".hover-box").forEach((box) => {
//     box.addEventListener("mouseover", (event) => {
//       event.target.classList.add("active");
//     });

//     box.addEventListener("mouseout", (event) => {
//       event.target.classList.remove("active");
//     });
//   });

//   function updateColor(target, distance) {
//     const maxDistance = 200;
//     const intensity = Math.max(0, 1 - distance / maxDistance);
//     target.style.backgroundColor = `rgba(0, 128, 255, ${intensity})`;
//   }

//   const mapAreas = document.querySelectorAll(".hover-box");
//   mapAreas.forEach(function (area) {
//     const areaRect = area.getBoundingClientRect();
//     const areaX = areaRect.left + Math.random() * areaRect.width;
//     const areaY = areaRect.top + Math.random() * areaRect.height;

//     area.dataset.areaX = areaX;
//     area.dataset.areaY = areaY;

//     area.addEventListener("mouseover", function (event) {
//       const targetArea = event.target;
//       const mouseX = event.clientX;
//       const mouseY = event.clientY;

//       const distanceX = Math.abs(mouseX - parseFloat(targetArea.dataset.areaX));
//       const distanceY = Math.abs(mouseY - parseFloat(targetArea.dataset.areaY));
//       const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//       updateColor(targetArea, distance);
//     });

//     area.addEventListener("mousemove", function (event) {
//       const targetArea = event.target;
//       const mouseX = event.clientX;
//       const mouseY = event.clientY;

//       const distanceX = Math.abs(mouseX - parseFloat(targetArea.dataset.areaX));
//       const distanceY = Math.abs(mouseY - parseFloat(targetArea.dataset.areaY));
//       const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

//       updateColor(targetArea, distance);
//     });

//     area.addEventListener("mouseout", function (event) {
//       event.target.style.backgroundColor = "";
//     });
//   });

//   const draggable = document.getElementById("draggable");
//   let offsetX = 0;
//   let offsetY = 0;

//   draggable.addEventListener("mousedown", (event) => {
//     offsetX = event.offsetX;
//     offsetY = event.offsetY;

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   });

//   function onMouseMove(event) {
//     draggable.style.position = "absolute";
//     draggable.style.left = `${event.pageX - offsetX}px`;
//     draggable.style.top = `${event.pageY - offsetY}px`;
//   }

//   function onMouseUp() {
//     document.removeEventListener("mousemove", onMouseMove);
//     document.removeEventListener("mouseup", onMouseUp);
//   }
// });