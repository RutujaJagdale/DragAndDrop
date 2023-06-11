// Get references to the containers and the reset button
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.droppable');
const resetButton = document.getElementById('resetButton');

// Add event listeners to the draggable items
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

// Add event listeners to the droppable container
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);

// Drag and drop event handlers
function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.innerText);
  event.target.style.opacity = '0.4';
}

function dragOver(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  const newItem = document.createElement('div');
  newItem.innerText = data;
  container2.appendChild(newItem);
  event.target.style.opacity = '1';
  alert('Item dropped successfully!');
}

// Reset button event handler
resetButton.addEventListener('click', () => {
  container2.innerHTML = '';
});
