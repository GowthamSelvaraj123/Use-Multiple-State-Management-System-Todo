import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

export default function TodoForm({
  formData,
  setFormData,
  isEditing,
  handleSubmit,
  handleUpdate,
  handleChange
}) {
  const { setTodoLists } = useContext(TodoContext);

  return (
    <form
      onSubmit={isEditing ? handleUpdate : handleSubmit}
      className="w-full max-w-md mx-auto bg-white rounded-2xl p-6 space-y-6"
    >
      <input
        type="hidden"
        name="id"
        id="id"
        onChange={handleChange}
        value={formData.id}
        placeholder="Enter task ID"
        disabled={isEditing}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Task Name
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={formData.title}
          placeholder="Enter task name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      <div>
        <label
          htmlFor="completed"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Completed Status
        </label>
        <select
          name="completed"
          id="completed"
          onChange={handleChange}
          value={formData.completed}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          <option value="true">Completed</option>
          <option value="false">Pending</option>
        </select>
      </div>

      <button
        type="submit"
        className={`w-full py-2 rounded-lg font-semibold text-white transition 
        ${
          isEditing
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isEditing ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
