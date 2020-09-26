const inputRangeEl = document.querySelector('#font-size-control');
const textContentEl = document.querySelector('#text');

inputRangeEl.addEventListener('input', onInputRange);

function onInputRange(event) {
  textContentEl.style.fontSize = event.currentTarget.value + 'px';
}
