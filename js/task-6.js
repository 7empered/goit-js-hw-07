function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const inputEl = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  destroyBoxes();

  const elements = [];

  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px'; 
    elements.push(div);
    size += 10; 
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(inputEl.value.trim());

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a valid number between 1 and 100.');
    inputEl.value = '';
    return;
  }

  createBoxes(amount);

  inputEl.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
