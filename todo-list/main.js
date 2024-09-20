const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.textContent = todo.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    });
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTodo = { text: todoInput.value };
    todos.push(newTodo);
    saveTodos();
    renderTodos();
    todoInput.value = '';
});

renderTodos();
function updateClock(){
    const now=new Date();
    const hour=String(now.getHours()).padStart(2,"0");
    const minutes=String(now.getMinutes()).padStart(2,"0");
    const seconde=String(now.getSeconds()).padStart(2,"0");
    const timeString = `${hour}: ${minutes}: ${seconde}`;
    document.getElementById("clock").innerHTML=timeString

    }
    setInterval(updateClock,1000)
