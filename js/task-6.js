const input = document.querySelector('#validation-input');
const validNumberOfEl = input.dataset.length;
console.log(validNumberOfEl);

input.addEventListener('input', IsValidNumber);

function IsValidNumber(event) {
  console.log(event.currentTarget.value.length);
  console.log(validNumberOfEl);
  if (
    event.currentTarget.value.length < validNumberOfEl ||
    event.currentTarget.value.length > validNumberOfEl
  ) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}
