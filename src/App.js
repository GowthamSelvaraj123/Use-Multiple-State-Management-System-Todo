import './App.css';
import { useContext, useState } from 'react';
import TodoContext from './context/TodoContext';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Router from './Router';

function App() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header></Header>
      <Router></Router>
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} My Todo App. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
