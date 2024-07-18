import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const existingTodoList = [];

function App() {
    const [todoList, setTodoList] = useState(existingTodoList);
    const [editabletodo, setEditableTodo] = useState(null);

    function addTodo(todo) {
        if (todo.id) {
            // Edit existing todo
            const updatedTodos = todoList.map(t => t.id === todo.id ? todo : t);
            setTodoList(updatedTodos);
        } else {
            // Add new todo
            setTodoList([...todoList, { ...todo, id: todoList.length + 1 }]);
        }
        setEditableTodo(null); // Reset editable todo after adding/editing
    }

    function deleteTodo(id) {
        const updatedTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodoList);
    }

    function editTodo(id) {
        const editedTodo = todoList.find(todo => todo.id === id);
        setEditableTodo(editedTodo);
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full space-y-8">
                <TodoForm addTodo={addTodo} editabletodo={editabletodo} todoList={todoList} />
                {todoList && todoList.length > 0 &&
                    <TodoList todoList={todoList} editTodo={editTodo} deleteTodo={deleteTodo} />}
            </div>
        </div>
    );
}

export default App;
