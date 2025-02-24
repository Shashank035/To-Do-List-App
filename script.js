const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;

        if (task.completed) {
            taskElement.classList.add('completed');
        }

        taskElement.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        taskElement.appendChild(deleteBtn);
        taskList.appendChild(taskElement);
    });
}
