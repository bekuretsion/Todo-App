// get the Html Element
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
// create task counter
let taskId=1;

// function to add new Task 

function addTask(event){
    event.preventDefault();
    console.log('Form submission prevented');
    const taskText=taskInput.value.trim()
    if(taskText !== ""){
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class='delete-btn'>Delete</button>
        `;
        taskList.append(taskItem)
        taskInput.value ="";
        taskId++;
        // add event to the delete button
        const deleteBtn =taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click',deleteTask)

    }else {
        alert('Please enter a task.');
}
}
function deleteTask(event){
    const taskItem = event.target.parentElement
    console.log(taskItem);
    taskList.removeChild(taskItem);
}
// add Event listener to the form

taskForm.addEventListener('submit',addTask)