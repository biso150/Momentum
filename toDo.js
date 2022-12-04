/*
** todo
*/
const todoListForm = document.querySelector(".todoListForm");
const todo = document.querySelector(".todo");
const todoList = document.querySelector(".todoList ul");
const TODOLIST_KEY = "todoList"

const getTodoList = JSON.parse(localStorage.getItem(TODOLIST_KEY));
let todoObj = [];

if (getTodoList !== null) {
    todoObj = getTodoList;
    todoObj.forEach(paintTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    todoObj = todoObj.filter((todo) => todo.id !== parseInt(li.id));

    saveTodo();
}

function checkTodo(event) {
    const li = event.target.parentElement.parentElement;
    const target = event.target.parentElement.previousSibling;
    event.target.classList.toggle("done");
    target.classList.toggle("done");

    todoObj.forEach(function(item) {
        if (parseInt(li.id) === item.id) {
           item.done = target.classList.contains("done");
        }
    });

    saveTodo();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;

    const span = document.createElement("span");
    span.innerText = `· ${newTodoObj.text}`;

    const btnBox = document.createElement("div");
    btnBox.classList.add("btnBox");

    const checkButton = document.createElement("button");
    checkButton.innerText = "done";
    checkButton.classList.add("material-symbols-outlined", "check");
    checkButton.addEventListener("click", checkTodo);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.classList.add("material-symbols-outlined", "delete");
    deleteButton.addEventListener("click", deleteTodo);

    if(newTodoObj.done) {
        span.classList.add("done");
        checkButton.classList.add("done");
    };

    li.appendChild(span);
    btnBox.appendChild(checkButton);
    btnBox.appendChild(deleteButton);
    li.appendChild(btnBox);
    todoList.appendChild(li);
}

function saveTodo () {
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoObj));
}

function submitTodo (event) {
    event.preventDefault();
    const todoValue = todo.value;
    todo.value = "";
    const newTodoObj = { 
        "id" : Date.now(),
        "text" : todoValue,
        "done" : false
    };
    todoObj.push(newTodoObj);
    saveTodo ();
    paintTodo(newTodoObj);
} 

todoListForm.addEventListener("submit", submitTodo);