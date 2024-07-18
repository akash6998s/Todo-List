import React from 'react';

function TodoList({ todoList, deleteTodo, editTodo }) {
    return (
        <div className="mt-10">
            <h3 className="text-3xl font-bold text-center mb-6 text-gray-900">Todo List</h3>
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {todoList.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                        <div className="px-4 py-3 bg-gray-200 flex justify-between items-center">
                            <span className="text-xs font-semibold text-gray-800">ID: {item.id}</span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => editTodo(item.id)}
                                    className="text-gray-500 hover:text-blue-600 focus:outline-none"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536-9 9H6v-3.536l9-9zM16 3a2 2 0 112.828 2.828l-.707.707-3.536-3.536.707-.707A2 2 0 0116 3z"></path>
                                    </svg>
                                </button>

                                <button
                                    onClick={() => deleteTodo(item.id)}
                                    className="text-gray-500 hover:text-red-600 focus:outline-none"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <div className="px-6 py-4">
                            <h5 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h5>
                            <p className="text-gray-700">{item.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
