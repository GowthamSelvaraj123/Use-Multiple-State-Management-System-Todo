import React, { useState } from "react";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import AddModal from "../components/AddModal";
import { addTodos, deleteTodo, updateTodo } from "../redux/slice/todoSlice";

export default function PageUseRedux() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [showStatus, setShowStatus] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    completed: "false",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (id) => {
     dispatch(deleteTodo(id));
  };
  const handleEdit = (todo) => {
     setFormData(todo);
    setIsEditing(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodos(formData));
    setFormData({ id: "", title: "", status: "Pending" });
    setShowStatus(true);
  };
  const handleUpdate = () => {
    dispatch(updateTodo(formData));
    setIsEditing(false);
    setFormData({ id: "", title: "", status: "Pending" });
    setShowStatus(true);  
  }
  const handleClose = () => {
    setShowStatus(false);
  }
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
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
                  todoLists={todos}
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
