import React from 'react';

export default function TodoList({ todoLists, handleEdit, handleDelete }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl">
      <div className="flex items-center justify-center mb-5">
        <span className="text-lg font-semibold text-gray-700 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
          📝 Todo List
        </span>
      </div>

      <ul className="space-y-4">
        {todoLists.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >
            <div>
              <h2 className="text-sm font-medium text-gray-800">{item.title}</h2>
              <p className={`text-xs mt-1 font-semibold px-2 inline-block rounded-full 
                ${item.completed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                {item.completed ? "Completed" : "Pending"}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(item.id)}
                className="px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded hover:bg-black transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="px-3 py-1 text-xs font-medium text-white bg-red-600 rounded hover:bg-black transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {todoLists.length === 0 && (
          <p className="text-center text-gray-400 text-sm">No todos available.</p>
        )}
      </ul>
    </div>
  );
}
