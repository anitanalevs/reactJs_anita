const txtTodo = document.getElementById('txtTodo');
const btnaddTodo = document.getElementById('btnaddTodo');
const tblBodyTodo = document.getElementById('tblBodyTodo');


function loadtodoList() {
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    tblBodyTodo.innerHTML = '';
    todoList.forEach(todo => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${todo}</td>`;
        tblBodyTodo.appendChild(row);
    });
}


btnaddTodo.addEventListener('click', () => {
    const todoText = txtTodo.value.trim();
    if (todoText) {
        const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        todoList.push(todoText);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        loadtodoList();
        txtTodo.value = ''; 
    }
});

loadtodoList();