function modifyContent() {
  const title = document.querySelector("h1");
  title.textContent = "Ласкаво просимо до оновленого клубу 'Energia'!";
}

function removeElement() {
  const elementToRemove = document.querySelector(".info-box");
  if (elementToRemove) {
    elementToRemove.remove();
  }
}

// Використання document.write
document.write("<p>This is written dynamically using document.write()</p>");

// Створення нового елемента та додавання його до сторінки
const paragraph = document.createElement("p");
const textNode = document.createTextNode("This is a dynamically created paragraph.");
paragraph.appendChild(textNode);
document.body.append(paragraph);

// Використання prepend
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph is prepended dynamically.";
document.body.prepend(newParagraph);

// Використання after
const heading = document.createElement("h2");
const headingText = document.createTextNode("Dynamic Heading");
heading.appendChild(headingText);
paragraph.before(heading);

const button = document.createElement("button");
const buttonText = document.createTextNode("Click Me");
button.appendChild(buttonText);
heading.after(button);

// Використання replaceWith
button.addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  const newText = document.createTextNode("The paragraph has been changed.");
  newParagraph.appendChild(newText);
  paragraph.replaceWith(newParagraph);
});

// Використання remove
const delButton = document.createElement("button");
const delButtonText = document.createTextNode("Click Me to Delete");
delButton.appendChild(delButtonText);
heading.after(delButton);

delButton.addEventListener("click", function () {
  newParagraph.remove();
});