function loadTodos() {
  // This function will load the todods from the browser
  const todos = JSON.parse(localStorage.getItem("todos")) || { todoList: [] };
  console.log(todos);
  return todos;
}

function addTodoToLocalStorage(todoText) {
  const todos = loadTodos();
  todos.todoList.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function appendTodoinHTML(todotext) {
  const todoList = document.getElementById("todoList");
  const todo = document.createElement("Li");

  todo.textContent = todotext;

  todoList.appendChild(todo);
}

document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todoInput");

  const submitButton = document.getElementById("addTodo");

  submitButton.addEventListener("click", (event) => {
    const todoText = todoInput.value;
    if (todoText == "") {
      alert("Please write someting for the todo");
    } else {
      addTodoToLocalStorage(todoText);
      appendTodoinHTML(todoText);
      todoInput.value = "";
    }
  });

  todoInput.addEventListener("change", (event) => {
    // this call back mehthod is fired when something is changed
    const todoText = event.target.value;

    event.target.value = todoText.trim(); //To trim extra space
  });

  const todos = loadTodos();

  todos.todoList.forEach((todo) => {
    const newTodoItem = document.createElement("Li");
    newTodoItem.textContent = todo;
    todoList.appendChild(newTodoItem);
  });
});