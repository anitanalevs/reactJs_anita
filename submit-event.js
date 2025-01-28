const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
const result = document.getElementById('result');

// Event listeners for different events
inputField.addEventListener('focus', () => {
    console.log('Input field focused');
});

inputField.addEventListener('input', () => {
    console.log('Input changed');
});

submitButton.addEventListener('click', () => {
    result.textContent = inputField.value;
});