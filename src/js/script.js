document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="edit" onclick="editTask(this)">Editar</button>
            <button onclick="removeTask(this)">Remover</button>
        `;
        taskList.appendChild(taskItem);
    }

    window.removeTask = function(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    };

    window.editTask = function(button) {
        const taskItem = button.parentElement;
        const taskText = taskItem.querySelector('span').textContent;
        const newTaskText = prompt('Atualize a tarefa:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskItem.querySelector('span').textContent = newTaskText.trim();
        }
    };
});
