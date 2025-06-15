import { createContext, useEffect, useState } from "react";
import initialTodos from "../data/InitialTodos";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
     const [todoLists, setTodoLists] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [
      { id: 1, title: "Learn React", status: "Pending" },
      { id: 2, title: "Build a Todo App", status: "Pending" }
    ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoLists));
  }, [todoLists]);

    return (
        <TodoContext.Provider value={{ todoLists, setTodoLists }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;