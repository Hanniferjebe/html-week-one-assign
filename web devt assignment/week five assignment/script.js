// Change text dynamically
document.getElementById('changeTextButton').addEventListener('click', () => {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.textContent = "The text has been changed!";
    dynamicText.style.color = "green"; // Modify CSS style
});

// Add an element dynamically
document.getElementById('addElementButton').addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new element added dynamically.";
    document.getElementById('container').appendChild(newElement);
});

// Remove an element dynamically
document.getElementById('removeElementButton').addEventListener('click', () => {
    const container = document.getElementById('container');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});
