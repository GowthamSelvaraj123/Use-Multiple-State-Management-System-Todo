import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Learn React", status: "Pending" },
  { id: 2, title: "Build a Todo App", status: "Pending" },
];
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const { title, status = "Pending" } = action.payload; // default value if status not provided
      state.push({
        id: Date.now(),
        title,
        status,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, title, status } = action.payload;
      const existing = state.find((todo) => todo.id === id);
      if (existing) {
        existing.title = title;
        existing.status = status;
      }
    },
  },
});

export const { addTodos, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
