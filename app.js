document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Function to add a to-do item
    function addTodoItem() {
        const taskText = inputField.value.trim();
        if (taskText === '') return; 
        
        // Create elements
        const listItem = document.createElement('li');
        listItem.className = 'flex justify-between items-center mb-2 border-b pb-2';
        
        const taskTextElement = document.createElement('span');
        taskTextElement.className = 'flex-grow';
        taskTextElement.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.className = 'bg-yellow-500 text-white p-1 mr-2';
        editButton.textContent = 'Edit';
        
        const dateButton = document.createElement('button');
        dateButton.className = 'bg-green-500 text-white p-1 mr-2';
        dateButton.textContent = 'Date';
        
        const taskButton = document.createElement('button');
        taskButton.className = 'bg-indigo-500 text-white p-1 mr-2';
        taskButton.textContent = 'Task';
        
        const deleteButton = document.createElement('button');
        deleteButton.className = 'bg-red-500 text-white p-1';
        deleteButton.textContent = 'Delete';

        // Add event listeners
        editButton.addEventListener('click', function() {
            editTodoItem(taskTextElement);
        });
        
        dateButton.addEventListener('click', function() {
            dateTodoItem(taskTextElement);
        });

        taskButton.addEventListener('click', function() {
            taskTodoItem(taskTextElement);
        });

        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        // Append children
        listItem.appendChild(taskTextElement);
        listItem.appendChild(editButton);
        listItem.appendChild(dateButton);
        listItem.appendChild(taskButton);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        // Clear input field
        inputField.value = '';
    }

    // Function to edit a to-do item
    function editTodoItem(taskTextElement) {
        const newText = prompt("Edit your task:", taskTextElement.textContent);
        if (newText !== null) {
            taskTextElement.textContent = newText.trim();
        }
    }

    // Function to date a to-do item
    function dateTodoItem(taskTextElement) {
        const newDate = prompt("Enter the date for the task:", "");
        if (newDate !== null) {
            taskTextElement.textContent += ` (Due: ${newDate.trim()})`;
        }
    }

    // Function to task a to-do item
    function taskTodoItem(taskTextElement) {
        const newTask = prompt("Edit the task details:", taskTextElement.textContent);
        if (newTask !== null) {
            taskTextElement.textContent = newTask.trim();
        }
    }

    // Add event listener for the Add button
    addButton.addEventListener('click', addTodoItem);

    // Optional: Add item on pressing Enter in the input field
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodoItem();
        }
    });
});