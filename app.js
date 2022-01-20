// Define UI Variables
const form = document.querySelector('#task-form');             // <form>
const taskList = document.querySelector('.collection');        // <ul>
const clearBtn = document.querySelector('.clear-tasks');       // <a> - clear task button
const filter = document.querySelector('#filter');              // <input> - for filtering tasks
const taskInput = document.querySelector('#task');             // <input> - for entering tasks

// Function to load all event listeners
loadEventListeners();

function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Task (Event Handler)
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }
    // 1. create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // create text node and append to the li 
    li.appendChild(document.createTextNode(taskInput.value));

    // 2. create new link element (x icon)
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // add icon html
    link.innerHTML = "<i class='fa fa-remove'></i>";
    // Append link to li
    li.appendChild(link);

    // 3. Append li to ul
    taskList.appendChild(li);

    // 4. Clear input
    taskInput.value = '';
    console.log(li);

    e.preventDefault();
}