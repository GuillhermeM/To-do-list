const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

function addTodo(todoText) {
    const li = document.createElement('li');
    li.textContent = todoText;

    const completebtn = document.createElement('button');
    completebtn.textContent = '✔️';
    completebtn.classList.add('complete-btn');

    const deletebtn = document.createElement('button');
    deletebtn.textContent = '❌';
    deletebtn.classList.add('delete-btn');

    li.appendChild(completebtn);
    li.appendChild(deletebtn);

    todoList.appendChild(li);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;

    if (todoText !== '') {
        addTodo(todoText);
        input.value = '';
    }
});


todoList.addEventListener('click', (e) => {
    const clickedElement = e.target;

    if (clickedElement.classList.contains('complete-btn')) {
        const todoitem = clickedElement.parentElement;
        todoitem.classList.toggle('completed');
    }

    if (clickedElement.classList.contains('delete-btn')) {
        const todoitem = clickedElement.parentElement;
        todoitem.remove();
    }
});