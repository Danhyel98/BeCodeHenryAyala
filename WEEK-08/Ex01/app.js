const newInput = document.getElementById("item-added");
const addBtn = document.getElementById("add-item");
const theList = document.getElementById("task-list");

// Function to load todos from local storage
function loadTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  if (todos) {
    const parsedTodos = JSON.parse(todos);
    parsedTodos.forEach(todo => {
      createTodoItem(todo);
    });
  }
}

// Function to create a new todo item element
function createTodoItem(text) {
  const newListItem = document.createElement("div");
  newListItem.classList.add("todo-item");

  const newP = document.createElement("p");
  newP.innerText = text;

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete-btn");

  delBtn.addEventListener("click", function() {
    theList.removeChild(newListItem);
    saveTodosToLocalStorage();
  });

  newListItem.appendChild(newP);
  newListItem.appendChild(delBtn);
  theList.appendChild(newListItem);
}

// Function to save todos to local storage
function saveTodosToLocalStorage() {
  const todoItems = theList.querySelectorAll('.todo-item');
  const todos = [];
  todoItems.forEach(item => todos.push(item.firstChild.textContent));
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Load existing todos on page load
loadTodosFromLocalStorage();

addBtn.addEventListener("click", function() {
  const newTodoText = newInput.value.trim();
  if (newTodoText) {
    createTodoItem(newTodoText);
    newInput.value = "";
    saveTodosToLocalStorage();
  } else {
    // Optional: Display an error message if the input is empty
  }
});
