const input = document.querySelector('#validation-input');
const validNumberOfEl = Number(input.dataset.length);
console.log(validNumberOfEl);

input.addEventListener('blur', IsValidNumber);

function IsValidNumber(event) {
  console.log(event.currentTarget.value.length);
  console.log(validNumberOfEl);
  if (event.currentTarget.value.length === validNumberOfEl) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
