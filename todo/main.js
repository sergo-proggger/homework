"use strict"

const todoKeys = {
    id: "id",
    text: "text",
    is_completed: "is_completed",
    category: "category",
    created_at: "created_at",
    updated_at: "updated_at"
};

const todos = [];
const errTodo = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = (todos) => {
    return (
        todos.reduce((maxId, todo) => {
            return Math.max(maxId, todo[todoKeys.id]);
        }, 0) + 1
    );
}

const createTodo = (todos, text, priority = "medium", category = "general", due_date = null) => {
    const currentTime = new Date().toISOString();
    
    const newTodo = {
        [todoKeys.id]: getNewTodoId(todos), 
        [todoKeys.text]: text, 
        [todoKeys.is_completed]: false,
        [todoKeys.category]: category,
        [todoKeys.created_at]: currentTime,
        [todoKeys.updated_at]: currentTime
    };
    todos.push(newTodo);
    return newTodo;
};

const completeTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
    if (!todo) {
        console.error(errTodo(todoId));
        return null;
    }
    todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
    todo[todoKeys.updated_at] = new Date().toISOString();
    return todo;
};

const deleteTodoByIdMutable = (todos, todoId) => {
    const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
    if (todoIndex === -1) {
        console.error(errTodo(todoId));
        return todos;
    }
    const deletedTodo = todos.splice(todoIndex, 1)[0];
    console.log(`Todo "${deletedTodo[todoKeys.text]}" deleted successfully`);
    return todos;
};

