console.log("welcome to my todo app");

let todos = [];


let todoDataList = document.getElementById("todo-data-list");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar");

todoInputBar.addEventListener("keyup", function toggleSaveButton(){
    let todotext = todoInputBar.value;
    if(todotext.length == 0){
        if(saveButton.classList.contains("disabled")) return;
        saveButton.classList.add("disabled");
    }
    else if(saveButton.classList.contains("disabled")) {
        saveButton.classList.remove("disabled");
    }
});

saveButton.addEventListener("click",function getTextAndAddTodo(){
    let todotext = todoInputBar.value;
    if(todotext.length == 0) return;
    let todo = {text:todotext, status:'In Progress', finishButtonText:'Finished'};
    todos.push(todo);
    addTodo(todo, todos.length);
    todoInputBar.value = "";
});

function reRenderTodos (){
    todoDataList.innerHTML = '';
    todos.forEach((element,idx)=> {
        addTodo(element,idx+1)
    });
}

function removeTodo(event){
    // console.log("clicked", event.target.parentElement.parentElement.parentElement);
    // event.target.parentElement.parentElement.parentElement.remove();
    let deleteButtonPressed = event.target;
    let indexToBeRemoved = Number(deleteButtonPressed.getAttribute("todo-idx"));
    todos.splice(indexToBeRemoved,1);
    reRenderTodos();
}

function finishTodo(event){
    let finishButtonPressed = event.target;
    let indexToBeFinished = Number(finishButtonPressed.getAttribute("todo-idx"));

    // Toggle
    if(todos[indexToBeFinished].status == 'Finished'){
        todos[indexToBeFinished].status = "In progress";
        todos[indexToBeFinished].finishButtonText = "Finished";
    }else{
        todos[indexToBeFinished].status = "Finished";
        todos[indexToBeFinished].finishButtonText = "Undo";
    }

    todos.sort((a , b) => {
        if(a.status == 'Finished'){
            return 1;
        }
        return -1;
    });

    reRenderTodos();
}

function addTodo(todo, todoCount){
    console.log("called add todo");
    let rowDiv = document.createElement("div");
    let todoItem = document.createElement("div");
    let todoNumber= document.createElement("div");
    let todoDetail = document.createElement("div");
    let todoStatus = document.createElement("div");
    let todoActions = document.createElement("div");
    let deleteButton = document.createElement("button");
    let finishedButton= document.createElement("button");
    let hr = document.createElement("hr");

    // Adding Classes
    rowDiv.classList.add("row");
    todoItem.classList.add("todo-item","d-flex", "flex-row", "justify-content-between", "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-details", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-actions","d-flex","justify-content-start","gap-2");
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn", "btn-success", "finish-todo");

    finishedButton.setAttribute("todo-idx",todoCount-1);
    deleteButton.setAttribute("todo-idx",todoCount-1);
    deleteButton.onclick = removeTodo;
    finishedButton.onclick = finishTodo;

    todoNumber.textContent = `${todoCount}.`;
    todoDetail.textContent = todo.text;
    todoStatus.textContent = todo.status;
    deleteButton.textContent = "Delete";
    finishedButton.textContent = todo.finishButtonText;

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);

    todoDataList.appendChild(rowDiv);
    
}

