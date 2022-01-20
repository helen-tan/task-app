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
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear all tasks event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
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
    link.innerHTML = '<i class="fas fa-window-close"></i>';
    // Append link to li
    li.appendChild(link);

    // 3. Append li to ul
    taskList.appendChild(li);

    // 4. Clear input
    taskInput.value = '';
    console.log(li);

    e.preventDefault();
}

// Remove Task (Event Handler)
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){   // Event Delegation
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear all tasks (Event Handler)
function clearTasks(){
    //taskList.innerHTML = '';
    // Faster way
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter Tasks (Event Handler)
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){                                   // task is  <li>...</li>
            const item = task.firstChild.textContent;     // item is the content in the task e.g. "Walk the dog"                          
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }

        }
    );  // querySelector returns a node list, so we can use forEach
}