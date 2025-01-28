// Arrow Functions
const greet = name => `<div style="color: blue;">Arrow Functions:</div>  <br> Hello, ${name}!`;
document.getElementById('output').innerHTML = greet('VS') + '<br><br>';

// Template Literals
const name = 'Anita Nale';
const companyName = 'Varseno';
document.getElementById('output').innerHTML += `<div style="color: blue;">Template Literals:</div>  <br>  Name: ${name}, Company Name: ${companyName}<br><br>`;

// Spread Operator
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];
document.getElementById('output').innerHTML += `Spread Operator Combined Array: ${array2}<br><br>`;

// Promises
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = document.getElementById('output').innerHTML;
        resolve(data);
    }, 1500);
});

fetchData.then(data => {
    document.getElementById('output').innerHTML += `<div style="color: blue;">Promise example: </div><br>`;
    document.getElementById('output').innerHTML += `Result: ${data}<br>`;

});