import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import AddModal from "../components/AddModal";

export default function PageUseContext() {
  const { todoLists, setTodoLists } = useContext(TodoContext);

  const [showStatus, setShowStatus] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    completed: "false",
  });

  // Add New Task
  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = formData.title.trim();

    if (!trimmedTitle) {
      alert("Please enter a title.");
      return;
    }

    const isDuplicate = todoLists.some(
      (todo) => todo.title.toLowerCase() === trimmedTitle.toLowerCase()
    );

    if (isDuplicate) {
      alert("This title already exists. Please enter a unique title.");
      return;
    }

    const newTodo = {
      ...formData,
      id: Date.now(),
      title: trimmedTitle,
      completed: formData.completed === "true",
    };

    setTodoLists((prev) => [...prev, newTodo]);

    setFormData({ id: "", title: "", completed: "false" });

    setShowStatus(true);
    setTimeout(() => {
      setShowStatus(false);
    }, 1500);
  };

  // Update Task
  const handleUpdate = (event) => {
    event.preventDefault();

    const trimmedTitle = formData.title.trim();

    if (!formData.id || !trimmedTitle) {
      alert("Please fill in all fields.");
      return;
    }

    const isDuplicate = todoLists.some(
      (todo) =>
        todo.title.toLowerCase() === trimmedTitle.toLowerCase() &&
        todo.id !== Number(formData.id)
    );

    if (isDuplicate) {
      alert("Another task with the same title already exists.");
      return;
    }

    const updatedTodo = {
      ...formData,
      id: Number(formData.id),
      title: trimmedTitle,
      completed: formData.completed === "true",
    };

    setTodoLists((prev) =>
      prev.map((item) => (item.id === updatedTodo.id ? updatedTodo : item))
    );

    setFormData({ id: "", title: "", completed: "false" });
    setIsEditing(false);
  };

  // Delete Task
  const handleDelete = (id) => {
    setTodoLists((prev) => prev.filter((item) => item.id !== id));
  };

  // Edit Task
  const handleEdit = (id) => {
    const itemToEdit = todoLists.find((item) => item.id === id);
    if (itemToEdit) {
      setFormData({
        id: itemToEdit.id,
        title: itemToEdit.title,
        completed: itemToEdit.completed ? "true" : "false",
      });
      setIsEditing(true);
    }
  };
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  // Close Modal
  const handleClose = () => {
    setShowStatus(false);
  };

  return (
    <div>
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Left: Form */}
          <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
              {isEditing ? "✏️ Edit Task" : "➕ Add New Task"}
            </h3>
            <TodoForm
              formData={formData}
              setFormData={setFormData}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleSubmit={handleSubmit}
              handleUpdate={handleUpdate}
              handleChange={handleChange}
            />
          </div>

          {/* Right: Task List */}
          <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
            <TodoList
              todoLists={todoLists}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>

      {/* Modal */}
      <AddModal
        show={showStatus}
        message="✅ Task saved successfully!"
        onClose={handleClose}
      />
    </div>
  );
}
