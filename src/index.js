import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";
import { Provider } from "react-redux";
import {store} from "./redux/store"
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <TodoProvider>
        <App />
      </TodoProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
