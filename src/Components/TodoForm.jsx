import React, { useState, useEffect } from 'react';

const initialTodoList = {
    title: "",
    note: ""
}

function TodoForm({ addTodo, todoList, editabletodo }) {
    const [todo, setTodo] = useState(initialTodoList);

    useEffect(() => {
        if (editabletodo) {
            setTodo(editabletodo);
        } else {
            setTodo(initialTodoList);
        }
    }, [editabletodo]);

    function handleChange(e) {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.title && todo.note) {
            addTodo(todo);
            setTodo(initialTodoList); // Reset the form after submission
        }
    }

    return (
        <form className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-5 text-gray-900">{editabletodo ? "Edit Todo" : "Add a New Todo"}</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input
                    value={todo.title}
                    name='title'
                    onChange={handleChange}
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Title"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Take a note</label>
                <textarea
                    value={todo.note}
                    name='note'
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your note..."
                    required
                ></textarea>
            </div>
            <div className="flex items-center justify-end">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default TodoForm;
