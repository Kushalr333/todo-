const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-items");

addBtn.addEventListener("click", () => {
  if (todoInput.value) {
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    todoList.appendChild(newTodo);
    todoInput.value = "";
  }
});

todoList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
