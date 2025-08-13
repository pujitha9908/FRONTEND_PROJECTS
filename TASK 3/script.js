let count = 0;

const counterDisplay = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Increment
incrementBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});

// Decrement (not below 0)
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

// Reset
resetBtn.addEventListener('click', () => {
  count = 0;
  updateCounter();
});

function updateCounter() {
  counterDisplay.textContent = count;
}
