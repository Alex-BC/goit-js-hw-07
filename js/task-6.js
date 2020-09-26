const input = document.querySelector('#validation-input');
const validNumberOfEl = input.dataset.length;
console.log(validNumberOfEl);

input.addEventListener('input', IsValidNumber);

function IsValidNumber(event) {
  console.log(event.currentTarget.value.length);
  console.log(validNumberOfEl);
  if (event.currentTarget.value.length > validNumberOfEl) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else if (event.currentTarget.value.length < validNumberOfEl) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
