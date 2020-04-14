const inputEl = document.getElementById('todo-input');
const todoListEl = document.getElementById('todo-list');

document.getElementById('todo-add').addEventListener('click', addTodo);

function addTodo() {
  console.log(inputEl.value);
  const newListEl = document.createElement('li');
  newListEl.innerText = inputEl.value;
  inputEl.value = '';

  todoListEl.appendChild(newListEl);

  localStorage.setItem('key-1', true);
}
