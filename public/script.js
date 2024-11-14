const apiUrl = "http://localhost:3000/api/todos";

async function fetchTodos(){
    try {
        const response = await fetch(apiUrl);
        const todos = await response.json();
        if(!Array.isArray(todos)){
            console.log('expected an array of todos but got', todos);
            return;
        }

        const todoList = document.getElementById('todo-list');
        if(!todoList){
            console.error('the element with id "todo-list" was not found');
            return;
        }
        todoList.innerHTML = ''
    
        todos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            todoItem.innerHTML = `
            <span> ${todo.title}</span>
            <button class="btn btn-danger btn-sm" onClick="deleteTodo(${todo.id})">Delete</button>
            `;
            todoList.appendChild(todoItem);
    
        });
    } catch (error) {
        console.error(error);
    }
}


// add a new todo

async function addTodo(){
    const title = document.getElementById('todoTitle').value;
    if(!title){
        alert('please enter the title');
        return;
    }

    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title
        })
    });
    document.getElementById("todoTitle").value = "";
    fetchTodos();
}

// delete a todo 

async function deleteTodo(id){
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    fetchTodos();
}

fetchTodos();