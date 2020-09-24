const input = document.querySelector('#name-input');
const nameLabelEl = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    nameLabelEl.textContent = 'незнакомец';
  } else {
    nameLabelEl.textContent = event.currentTarget.value;
  }
}
