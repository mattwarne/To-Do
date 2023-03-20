// Empty script file to start with
// step 1 find element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
var templateContainer = document.getElementById("list-item-template");
var template = templateContainer.innerHTML;
// step 2 write the behaviour
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput = "";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML('afterbegin', taskHTML);
}

function onTodoListContainerClicked(event){
    while (!targetElement.classlist.contains("task")){
        targetElement = targetElement.parentElement;
    }
    var checkbox = targetElement.querySelector(".checkbox");
    if (checkbox.checked){
        targetElement.classlist.add("completed")
    } else {
        targetElement.classlist.remove("completed")
    }
}




// step 3 link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListContainerClicked);