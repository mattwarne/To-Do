// Empty script file to start with
// step 1 find element
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");
// step 2 write the behaviour
function onAddTaskClicked(event) {
    var taskName = newTaskInput.value;
    newTaskInput = "";
    todoListContainer.insertAdjacentHTML('afterbegin', taskName);
}
// step 3 link to event handler
addTaskButton.addEventListener('click', onAddTaskClicked);