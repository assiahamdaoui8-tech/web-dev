const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


// Function to add a task
function addTask() {

    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }


    // Create <li>
    const li = document.createElement("li");

    li.classList.add("task");


    // Create task text
    const span = document.createElement("span");

    span.textContent = taskText;

    span.classList.add("task-text");


    // Click on task = completed
    span.addEventListener("click", function () {

        span.classList.toggle("completed");

    });


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-button");


    // Delete task
    deleteButton.addEventListener("click", function () {

        li.remove();

    });


    // Put everything inside li
    li.appendChild(span);

    li.appendChild(deleteButton);


    // Put li inside ul
    taskList.appendChild(li);


    // Empty input
    taskInput.value = "";

    // Put cursor back in input
    taskInput.focus();
}


// Click Add button
addButton.addEventListener("click", addTask);


// Press Enter
taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addTask();

    }

});